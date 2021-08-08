const http = require('http');
const url = require('url');

const { findMatches } = require('./controllers/MatchesController');
const { jsonStringify } = require('./functions/jsonStringify');

const port = 5000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    const url_parts = url.parse(req.url, true);

    switch (true) {

        case url_parts.pathname === '/matches/team' && req.method === 'GET':
            res.statusCode = 200;
            findMatches(req, res, url_parts.query, 'team');
            break;

        case url_parts.pathname === '/matches/tournament' && req.method === 'GET':
            res.statusCode = 200;
            findMatches(req, res, url_parts.query, 'tournament');
            break;

        default:
            res.statusCode = 400;
            res.end(jsonStringify({ error: 400, description: 'Bad Request' }));
            break;
    }
})

server.listen(port);

console.log(`Node.js web server is running at port ${port}...`);