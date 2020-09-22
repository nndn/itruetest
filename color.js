
color1 = ["#f8b595","#f67280","#d6e4f0","#dcedc1","#f38181","#455d7a","#10ddc2",
                "#99e1e5","#00818a","#e43a19","#ea9085","#ffabe5","#c06c84","#2eb872","#a3de83","#c1c0b9",
                "#f3f798","#70a1d7","#f7f48b","#f1c40f","#f7f3ce","#e79e85"];

i = 0;
$('#ip:text').val(color1[i]);

$('.next').on('click',function(){

    i = i+1;

    if(i == color1.length)
    {
        i=0;
    }

    $('.header').css("background-color",color1[i]);
    $('.collapsible').css("background-color",color1[i]);
    $('.footer').css("background-color",color1[i]);
    $('.copyright').css("background-color",color1[i]);
    $('.main').css("background-color",color1[i]);

    $('#ip:text').val(color1[i]);
    
});

$('.prev').on('click',function(){

    i = i-1;

    if(i == -1)
    {
        i = color1.length -1 ;
    }

    $('.header').css("background-color",color1[i]);
    $('.collapsible').css("background-color",color1[i]);
    $('.footer').css("background-color",color1[i]);
    $('.copyright').css("background-color",color1[i]);
    $('.main').css("background-color",color1[i]);

    $('#ip:text').val(color1[i]);
    
});

$('.apply').on('click',function(){

    col = $('#ip').val();

    $('.header').css("background-color",col);
    $('.collapsible').css("background-color",col);
    $('.footer').css("background-color",col);
    $('.copyright').css("background-color",col);
    $('.main').css("background-color",col);
    
});