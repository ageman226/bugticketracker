const sql = require('./model')

function createRolesTables() {
    sql.con.connect((err) => {
        if (err) throw err;
        sqlquery = "CREATE TABLE IF NOT EXISTS roles (" +
            "role_id INT AUTO_INCREMENT PRIMARY KEY, " +
            "role_name varchar(255) NOT NULL);";
        runQuery(sqlquery, "Roles");
    });
}

function createUsersTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS users (" +
            "id INT AUTO_INCREMENT PRIMARY KEY," +
            "username varchar(255) NOT NULL," +
            "role_id INT," +
            "FOREIGN KEY (role_id) REFERENCES roles(role_id)," +
            "email varchar(255) NOT NULL" +
            ");";
        runQuery(sqlquery, "Users");
    });
}
function createProjectsTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS projects (" +
            "id INT AUTO_INCREMENT PRIMARY KEY," +
            "project_name VARCHAR(255) NOT NULL," +
            "description TEXT" +
            ");";
        runQuery(sqlquery, "Projects")
    });
}

// Alter the name column
function createPriorityTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS priority (" +
            "priority_id INT AUTO_INCREMENT PRIMARY KEY," +
            "priority_name varchar(255) NOT NULL" +
            ");";
        runQuery(sqlquery, "Priority")
    });
}


function createStatusTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS status (" +
            "status_id INT AUTO_INCREMENT PRIMARY KEY," +
            "status_name varchar(255) NOT NULL" +
            ");";
        runQuery(sqlquery, "Status")
    });
}

function createTicketTypeTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS ticket_type (" +
            "type_id INT AUTO_INCREMENT PRIMARY KEY," +
            "type_name varchar(255) NOT NULL" +
            ");";
        runQuery(sqlquery, "Ticket Type")
    });

}

function createTicketTable() {
    sql.con.connect((err) => {
        if (err) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS tickets (" +
            "ticket_id INT AUTO_INCREMENT PRIMARY KEY," +
            "projectid INT NOT NULL," +
            "description TEXT NOT NULL," +
            "priority_id INT NOT NULL," +
            "status_id INT NOT NULL," +
            "type_id INT NOT NULL," +
            "user_id INT NOT NULL," +
            "created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP" +
            ");";
        runQuery(sqlquery, "Ticket")
    });
}

function createTicketCommentTable() {
    sql.con.connect((err) => {
        if (err.message) {
            console.log(err.message)
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS ticket_comments (" +
            "id INT AUTO_INCREMENT PRIMARY KEY," +
            "ticket_id INT NOT NULL," +
            "user_id INT NOT NULL," +
            "meessage LONGTEXT NOT NULL," +
            "created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP" +
            ");";
        runQuery(sqlquery, "Ticket Comments")
    });
}

function createTicketAttachmentTable() {
    sql.con.connect((err) => {
        if (err.message) {
            console.log("Error getting client")
        }
        sqlquery = "CREATE TABLE IF NOT EXISTS ticket_attachment (" +
            "id INT AUTO_INCREMENT PRIMARY KEY," +
            "ticket_id INT NOT NULL," +
            "description LONGTEXT," +
            "file_name varchar(255) NOT NULL" +
            ");";
        runQuery(sqlquery, "Ticket Attachments")
    });
}

function runCreateTables() {
    createRolesTables();
    createUsersTable();
    createProjectsTable();
    createPriorityTable();
    createStatusTable();
    createTicketTypeTable();
    createTicketTable();
    createTicketCommentTable();
    createTicketAttachmentTable();
}

function runQuery(query, tableName) {
    sql.con.query(query, (err, res) => {
        if (!err) {
            console.log(`${tableName} Table created successfully`);
        }
        else {
            console.log(err.message);
        }
    });
}

module.exports = {runCreateTables}