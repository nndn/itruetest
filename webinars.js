
$('.webinar').hover(function(){
    $(this).children('.calendar').children('.icon').attr('src','assets/calendar.png');
},
function(){
    $(this).children('.calendar').children('.icon').attr('src','assets/calendar2.png');
});