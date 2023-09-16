const http = require('http');
const hostname = 'localhost';
const port = 5000;

//declare express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const blackpinkRouter = require('./routes/blackpinkRouter');
app.use(bodyParser.json());

app.use('/blackpink',blackpinkRouter)



/*app.all('/blackpink', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/blackpink', (req, res, next) => {
    res.end('Blackpink in your area!');
});

app.post('/blackpink', (req, res, next) => {
    res.end('Adding 1 more member: '+ req.body.name + ' , nation: '+ req.body.nation);
});

app.put('/blackpink', (req, res, next) => {
    res.statusCode = 403;
    res.end('Not supported!!!');
});

app.delete('/blackpink', (req, res, next) => {
    res.end('Blackpink giai tan')
});

app.get('/blackpink/:blackpinkId', (req, res, next) => {
    res.end('This is secret information of: ' + req.params.blackpinkId);
});

app.post('/blackpink/:blackpinkId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Khong du trinh');
});

app.put('/blackpink/:blackpinkId', (req, res, next) => {
    res.write('Updating the member: '+ req.params.blackpinkId + '\n');
    res.end('Updating a member: '+ req.body.name + ' , nation: '+ req.body.nation)
});

app.delete('/blackpink/:blackpinkId', (req, res, next) => {
    res.end('Deleting a member: '+ req.params.blackpinkId);
});
*/

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})