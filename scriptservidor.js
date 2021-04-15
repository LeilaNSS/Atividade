var http = require('http');
var url = require('url');


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); 
    var q = url.parse(req.url, true).query; 
    var txt = parseInt(q.numA)  + parseInt(q.numB) + "Opção escolhida " + q.operacao;
    var txt1 = "O resultado é: " + txt;
    
    res.end(txt1);
}).listen(4000); 