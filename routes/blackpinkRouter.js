const express = require('express');
const bodyParser = require('body-parser');

const blackpinkRouter = express.Router();

blackpinkRouter.use(bodyParser.json());


//ex: http://localhost:5000/blackpink/hihi
blackpinkRouter.route('/hihi')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end('Blackpink has 4 members');
})
.post((req, res, next) => {
    res.end('Adding 1 more member: '+ req.body.name.toUpperCase() + ' come from '+ req.body.nation.toUpperCase());
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Not supported! (you need add parameter to method put)');
})
.delete((req, res, next) => {
    res.end('delete all => Blackpink giai tan')
})

//ex: http://localhost:5000/blackpink/lisa
blackpinkRouter.route('/:blackpinkId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end('This is secret information of: ' + req.params.blackpinkId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('post has parameter -> wrong');
})
.put((req, res, next) => {
    res.write('Updating the member: '+ req.params.blackpinkId + '\n');
    res.end('Updating a member: '+ req.body.name.toUpperCase() + ' come from '+ req.body.nation.toUpperCase())
})
.delete((req, res, next) => {
    res.end('Deleting a member: '+ req.params.blackpinkId);
})

module.exports = blackpinkRouter;