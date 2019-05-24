var case_src = $('#pliki-main').attr('case_src');
var file_content = fs.readFileSync(case_src + '/case_data.xml', 'utf8');
var case_xml = parseXML(file_content);