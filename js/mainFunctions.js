//close app
$('.close-app').click(function(){
    console.log('close');
    remote.getCurrentWindow().close();
});

//minimalize app
$('.minimalize-app').click(function(){
    remote.BrowserWindow.getFocusedWindow().minimize();
});

//load file to container
$('#main').load('aplications/mcra/main.html');

//top menu konto, wiadomosci
$('.top-menu-link').click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    hideTooltip();
    
    $('#main').load(href);
});

//top menu glowna, kancelaria, wiedza, odkryj, zasoby
$('.menu-link').click(function(e){
    $('li.active').removeClass('active');
    $(this).parent().addClass('active');

    e.preventDefault();
    $('#main').load(this.href);
});

//obsluga linkow na stronie w #main
$('#main').on('click', '.link', function(){
    var href = $(this).attr('href');
    var element_id = $(this).attr('element_id');
    var category_type = $(this).attr('category_type');

    if (typeof category_type !== typeof undefined && category_type !== false) {
        $('#main').load(href).attr('page', href).attr('element_id', element_id);
        $('#main').load(href).attr('page', href).attr('category_type', category_type);
    }else{
        $('#main').load(href).attr('page', href).attr('element_id', element_id);
    }
});