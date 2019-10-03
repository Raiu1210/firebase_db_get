const express = require('express')

const app = express()

app.get('/test', function(req, res) {
	console.log("yey")
})



app.listen(process.env.PORT || 3000)