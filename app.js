//jshint esversion:6

const express = require('express');
const { urlencoded, application } = require('express');
const ejs = require('ejs');
const connection = require('./model/tables.js');
const postData = require('./model/api.js');
const datafetch = require('./model/data.js');

// Routes
const testRoute = require('./routes/test');
const api = require('./routes/api');

// Express setup
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(urlencoded({ extended: true }));

// Route declaration
app.use('/test', testRoute);
app.use('/api', api)

// data = {
//   ticket_id: 1,
//   user_id: 1,
//   message: "We are working on this issue as of right now"
// }

// postData.insertTicketCommentData(data)

app.get('/', async function (req, res) {
  const result = await datafetch.testQuery();
  console.log(result);
  resultJson = JSON.parse(JSON.stringify(result));
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
  res.json(resultJson);
})

app.get('/htmlsend', async function (req, res) {
  const result = await data.selectAllProjects();
  console.log(result);
  resultJson = JSON.parse(JSON.stringify(result));
  res.render("index", { results: resultJson });
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});