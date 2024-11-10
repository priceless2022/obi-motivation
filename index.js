// index.js
const http = require('http');  // Import the http module

// Create a simple server
const server = http.createServer((req, res) => {
    res.statusCode = 200;  // Set status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain');  // Set content type
    res.end("If it doesn’t challenge you, it won’t change you");  // Send the new response
});
// Define the port the server will listen on
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
