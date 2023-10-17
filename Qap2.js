//Full-Stack Javascript Qap2
//Author: Dawson Murray
//Date: October 10 2023

//Use to request.url property to determine the requested URL

const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const server = http.createServer((req, res) => {
    const requestedUrl = req.url;

// Routeing

switch (requestedUrl) {
    case '/':
        //Read and serve the home.html file
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                //Handle error, file not found
                myEmitter.emit('httpStatus', 404);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Not Found</h1>');
            }else {
                //Serve the Html content with correct content type
                myEmitter.emit('httpStatus', 200);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        break;

    case '/about':
        // Read and serve the about.html file
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                // Handle error, e.g., file not found
                myEmitter.emit('httpStatus', 404);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Not Found</h1>');
            } else {
                // Serve the HTML content with the appropriate content type
                myEmitter.emit('httpStatus', 200);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        break;

    case '/contact':
        // Read and serve the contact.html file
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
                // Handle error, e.g., file not found
                myEmitter.emit('httpStatus', 404);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Not Found</h1>');
            } else {
                // Serve the HTML content with the appropriate content type
                myEmitter.emit('httpStatus', 200);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
        break;

    default:
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
        myEmitter.emit('httpStatus', 404);
}
});

//HTTP Status Code Event Emitter
//This event is triggered to capture and record the HTTP status codes that occur when the server responds. It offers insight into the results of HTTP requests, enabling you to observe and document the result of each request. Such monitoring is valuable for diagnostic and problem-solving purposes.

myEmitter.on('httpStatus', (statusCode) => {
    console.log(`HTTP Status Code: ${statusCode}`);
})

server.listen(3002, () => {
    console.log('Server is listening on port 3002');
});