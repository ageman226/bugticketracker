const express = require('express');
const router = express.Router();
const datafetch = require('../model/data.js');

router.use((req, res, next) => {
    next();
});

router.get('/', async function (req, res) {
    var result = await datafetch.selectStatusTicketCount();
    ticketCount = JSON.parse(JSON.stringify(result));

    result = await datafetch.selectProjectCount();
    projectsCount = JSON.parse(JSON.stringify(result));

    result = await datafetch.selectProgressCount();
    resultJson = JSON.parse(JSON.stringify(result));
    count = 0
    inProgressCount = 0;
    resultJson.forEach(element => {
        if (element.status_id === 3) {
            inProgressCount++;
        }
        count++;
    });
    const countData = { count: count, inProgressCount: inProgressCount }

    result = await datafetch.selectUserCount();
    userCount = JSON.parse(JSON.stringify(result));

    res.render("test", {
        tickets: ticketCount,
        projects: projectsCount,
        countData: countData,
        userCount: userCount
    });
})

module.exports = router;