var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (_url == '/') {
    title = 'Welcome';
  }

  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }


  if (pathName === '/') {
    fs.readFile(`data/${queryData.id}`, 'utf8', function (_err, description) {
      var template = connectToHTML(title, description);

      response.end(template);
      response.writeHead(200);
    });
  } else {
    fs.readFile(`data/${queryData.id}`, 'utf8', function (_err, description) {
      var title = queryData.id;
      var template = connectToHTML(title, description);

      response.writeHead(200);
      response.end(template);
    });
  }


});

app.listen(3000);

function connectToHTML(title, description) {
  return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
}
