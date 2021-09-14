var fileSave = require('fs');
var testFolder = './data';

fileSave.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
});


fileSave.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});
