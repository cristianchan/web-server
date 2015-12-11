var express = require('express');
var app = express();
var port = 3000;

var middelware ={
	requireAuthentication:function(req,res,next){
		console.log('privete route hit!');
		next();
	},
	logger:function(req,res,next){
		console.log('Request :'+ req.method + req.originalUrl);
		next();
	}
};
// app.get('/',function(req,res){
// 	res.send('Hello Express');
// });
//app.use(middelware.requireAuthentication);
app.use(middelware.logger);
app.get('/about',function(req,res){
	res.send('About us!');
});
app.use(express.static(__dirname+'/Public'));
//console.log(__dirname);
app.listen(port,function(){
	console.log('Express Server Started! Port:'+port);
});