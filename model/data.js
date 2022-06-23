const sql = require('./model')
const runquery = require('./api')

function selectStatusTicketCount() {
    let query = `SELECT COUNT(status.status_id) AS Count, status.status_name ` +
    `FROM tickets ` +
    `LEFT JOIN status ` +
    `ON tickets.status_id = status.status_id ` +
    `WHERE tickets.status_id <> 3 ` +
    `GROUP BY status.status_name;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

function selectProjectCount() {
    let query = `SELECT count(projects.id) AS count 
    FROM projects;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

function selectProgressCount() { 
    let query = `SELECT count(tickets.status_id) as count, tickets.status_id `+ 
    `FROM bugtracker.tickets ` +
    `GROUP BY tickets.status_id;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

function selectUserCount() {
    let query = `SELECT count(users.id) as count ` +
    `FROM bugtracker.users;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

function selectUncompletedStatus() {
    let query = `SELECT count(tickets.priority_id ) as count, priority.priority_name `+
    `FROM tickets ` +
    `LEFT JOIN priority ` +
    `ON tickets.priority_id = priority.priority_id ` +
    `WHERE tickets.status_id <> 3 ` +
    `GROUP BY tickets.priority_id;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

function testQuery() {
    let query = `SELECT count(tickets.priority_id ) as count, priority.priority_name `+
    `FROM tickets ` +
    `LEFT JOIN priority ` +
    `ON tickets.priority_id = priority.priority_id ` +
    `WHERE tickets.status_id <> 3 ` +
    `GROUP BY tickets.priority_id;`
    return new Promise((resolve, reject) => {
        runquery.runQuery(query, reject, resolve);
    });
}

module.exports = {
    selectStatusTicketCount,
    selectProjectCount,
    selectProgressCount,
    selectUserCount,
    selectUncompletedStatus,
    testQuery
}