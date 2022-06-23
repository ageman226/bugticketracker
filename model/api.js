const sql = require('./model')

// insert functions
function insertRolesData(data) {
    const query = `INSERT INTO roles (role_name)` +
        `VALUES ('${data.role_name}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "roles");
    });
}

function insertUserData(data) {
    const query = `INSERT INTO users (username, role_id, email)` +
        `VALUES ('${data.username}', ${data.role_id}, '${data.email}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Users");
    });
}

function insertProjectData(data) {
    const query = `INSERT INTO projects (project_name, description) ` +
        `VALUES ('${data.project_name}', '${data.description}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Project");
    });
}

function insertPriorityData(data) {
    const query = `INSERT INTO priority (priority_name) ` +
        `VALUES ('${data.priority_name}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Priority");
    });
}

function insertStatusData(data) {
    const query = `INSERT INTO status (status_name) ` +
        `VALUES ('${data.status_name}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Status");
    });
}

function insertTicketTypeData(data) {
    const query = `INSERT INTO ticket_type (type_name) ` +
        `VALUES ('${data.type_name}')`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Ticket Type");
    });
}

function insertTicketData(data) {
    const query = `INSERT INTO tickets (projectid, description, priority_id, status_id, type_id, user_id)` +
    `VALUES (${data.projectid}, ` + 
    `"${data.description}", ` + 
    `${data.priority_id}, ` + 
    `${data.status_id}, ` +
    `${data.type_id}, ` +
    `${data.user_id})`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Ticket");
    });
}

function insertTicketCommentData(data) {
    const query = `INSERT INTO ticket_comments (ticket_id, user_id, meessage)
    VALUES (${data.ticket_id}, ${data.user_id}, "${data.message}")`;
    sql.con.query(query, (err, res) => {
        insertQueryLog(err, "Ticket Comments");
    });
}

// get functions
function selectAllRoles() {
    let query = `SELECT * FROM roles`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    })
}

function selectAllUsers() {
    let query = `SELECT * FROM users`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    })
}

function selectAllProjects() {
    let query = `SELECT * FROM projects`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

function selectAllPriority() {
    let query = `SELECT * FROM priority`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

function selectAllStatus() {
    let query = `SELECT * FROM status`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

function selectAllTicketTypes() {
    let query = `SELECT * FROM ticket_type`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

function selectAllTickets() {
    let query = `SELECT * FROM tickets`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

function selectAllTicketComments() {
    let query = `SELECT * FROM ticket_comments`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}

// Join SQL Statements

// refactored code
function runQuery(query, reject, resolve) {
    sql.con.query(query, (err, result) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(result);
        }
    });
}

function insertQueryLog(err, tableName) {
    if (!err) {
        console.log(`Data in ${tableName} table inserted successfully`);
    }
    else {
        console.log(err.message);
        console.log(`Something went wrong inserting data in ${tableName} table`)
    }
}

function testQuery() {
    let query = `SELECT count(projects.id) AS count 
    FROM projects;`
    return new Promise((resolve, reject) => {
        runQuery(query, reject, resolve);
    });
}


module.exports = {
    insertRolesData,
    insertUserData,
    insertProjectData,
    insertPriorityData,
    insertStatusData,
    insertTicketTypeData,
    insertTicketData,
    insertTicketCommentData,
    selectAllRoles,
    selectAllUsers,
    selectAllProjects,
    selectAllPriority,
    selectAllStatus,
    selectAllTicketTypes,
    selectAllTickets,
    selectAllTicketComments,
    runQuery
}