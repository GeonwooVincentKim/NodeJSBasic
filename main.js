var http = require('http');
var fs = require('fs');
var url = require('url');

function templateList(filelist, list) {
  var list = '<ul>';
  var i = 0;

  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }

  list = list + '</ul>';
  return list;
}

function convertToHTML(title, list, body) {
  return `
    <!doctype html>
      <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>

        ${list}
        ${body}
      </html>
    `;
}


var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var body = `<h2>${title}</h2> <p>${description}</p>`;

        var list = templateList(filelist, list);
        var template = convertToHTML(title, list, body);

        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readdir('./data', function (error, filelist) {
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;
          var body = `<h2>${title}</h2> <p>${description}</p>`;

          var list = templateList(filelist);
          var template = convertToHTML(title, list, body);

          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }



});
app.listen(3000);
