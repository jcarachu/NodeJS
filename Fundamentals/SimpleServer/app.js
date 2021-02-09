// app.js

const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017'

const dbName = 'game-of-thrones';
let name;
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
	if (err) return console.log(err);

	// Storing a reference to the database so you can use it later
	console.log(`Connected MongoDB: ${url}`)
	console.log(`Database: ${dbName}`)

	const db = client.db(dbName);
	const collection = db.collection('characters');
	collection.find().toArray((err, items) => {
 		console.log(items)
	})
	collection.findOne({name: 'Jon Snow'}, (err, item) => {
  		console.log(item)
	})
})

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send back a response and end the connection
    res.end('Hello World!\n');
    
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
console.log(name);

