# Football Game Service

### In order to run this service:
* First, make sure that you have `Node.js` installed on your computer and an IDE that supports this environment - such as `Visual Studio Code`.

* Second, make sure that port `5000` is available.

* Then, run the script `npm start` inside the main project folder.

### In order to use this service:
* Get list of matches by team:<br/>
`GET http://localhost:5000/matches/team?name=[Manchester City, Manchester United]`

* Get list of matches by team filtered by status:<br/>
`GET http://localhost:5000/matches/team?name=[Liverpool]&status=played`

* Get list of matches by tournament:<br/>
`GET http://localhost:5000/matches/tournament?name=[premier-league]`

* Get list of matches by tournament filtered by status:<br/>
`GET http://localhost:5000/matches/tournament?name=[premier-league,fa]&status=upcoming`