const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.get('/', (req, res) => {
res.sendfile(__dirname + "/index.html");  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

  
app.post('/page', function (req, res) { 	
 	
 	var data = {
 		username : req.body.username,
		password : req.body.password
 	}

 	console.log(data) 	 
  
  	res.json({requestBody: req.body})
});
