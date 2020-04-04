// ./index.js
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
	console.log(request.url);
	if (request.url.indexOf("/_css/") != 0 &&
		request.url.indexOf("/_js/") != 0) {
    	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    } else {
    	response.sendFile(path.resolve(__dirname, 'public', request.url))
    }
})

app.listen(port)
console.log("server started on port " + port)
