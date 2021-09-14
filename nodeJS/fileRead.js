var fileSave = require('fs');

fileSave.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
});
