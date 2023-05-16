const http = require('http')
require('dotenv').config(); //or run with node -r dotenv/config index.js so that import is not needed anymore
const hostname = '127.0.0.1'
const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server runningg at http://${hostname}:${port}/`)
// })

//Instead creating server with express

//Ex:2
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi user ' + process.env.USER_ID);

});

const server = app.listen(3000, () => console.log('Server ready'));
console.log();
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});
// process.kill(process.pid, 'SIGTERM');
//process.exit(1); or process.exitCode=1;

//PAssing numbers and getting them node app.js name=joe
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});