
const fs = require('fs');
var settings_file = './config/config.xml';

var settings = [];  
fs.readFileSync(settings_file, 'utf8', function(err, contents) { });
