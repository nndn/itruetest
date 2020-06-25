
$('.para').waypoint(function (direction) {
    $('.para').css('color','red');
    console.log('working fine')
}, {
    offset: function () {
        return -1 * $(this).height();
    }
});