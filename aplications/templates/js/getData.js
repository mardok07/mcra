var api_data;
fs = require('fs');
var file_content = fs.readFileSync('./config/config.xml', 'utf8');
var settings_xml = parseXML(file_content);
var server_url = settings_xml.config.server['#text'];

$.ajax({
    url: server_url + "/api/data",
    context:''
}).done(function(res) {
    api_data = res; 

//    if(api_data.notifications_count > 0){
//        $('#notification-count').html(api_data.notifications_count).show();
//    }

    $("#main"). removeAttr("error");
}).fail(function() {
    $('#main').attr('error','</br></br><center>Wystąpił błąd pobierania danych</currenda>');
    console.log("Wystąpił błąd podczas pobierania danych - sprawdź, czy jesteś w sieci Currenda");
});
