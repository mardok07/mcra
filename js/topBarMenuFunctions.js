//show / hide
$('.get-tooltip').click(function(){
    var show = $(this).attr('show');
    if($('.menu-tooltip[show=' + show + ']').is(":visible")){
        hideTooltip();
    }else{
        showTooltip(show);
    }
});

function showTooltip(element){
    $('.menu-tooltip .data').hide();
    $('.menu-tooltip .' + element).show();
    $('.menu-tooltip').slideDown( 500, function() {}).attr('show', element);
}

function hideTooltip(){
     $('.menu-tooltip').slideUp( 600, function() {});
}
