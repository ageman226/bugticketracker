const express = require('express');
const router = express.Router();
const datafetch = require('../model/data.js');

router.use((req, res, next) => {
    next();
});

router.get('/pie', async function (req, res) {
    const result = await datafetch.selectUncompletedStatus();
    console.log(result);
    resultJson = JSON.parse(JSON.stringify(result));
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    })
    res.json(resultJson)
})

module.exports = router;