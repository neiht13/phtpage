let express = require('express');
let moment = require('moment');
let cors = require('cors')

let app = express();
let port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Server is running...'+ port);
});
app.use(express.json())
app.use(cors())

app.use(function(req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/data', function (req, res) {
    res.json({txt: 'Hello'})
});
let mysql = require("mysql");
let db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "reactlanding"
};
let connection = mysql.createConnection(db_config);
app.get('/menu_bar', function (req, res) {
    connection.connect(function (err) {
        connection.query('select * from menu_bar order by value', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        })
    });
});
app.post('/menu_bar/delete', (req, res) => {
    const item = req.body;
    let sqlDelete = `delete from menu_bar where id like '` + item.id + `'` ;
    connection.connect(function (err) {
        connection.query(sqlDelete, function (err, recordset) {
          if (err) res.send(recordset);
          res.send(recordset);
        });
    });
});
app.post('/menu_bar/new', (req, res) => {
    console.log("new menu" + req.body);
    const menu = req.body;
    let sql = 'insert into menu_bar(id, name, value) ' +
              `values('${menu.id || ''}','${menu.name || ''}',${menu.value || ''})` ;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
          if (err) {
              res.status(400).send(err);
          } else res.send(recordset);
        });
    });
});
app.post('/menu_bar/update', (req, res) => {
    console.log("new menu" + req.body);
    const menu = req.body;
    let sql = `UPDATE menu_bar SET name = '${menu.name}', value = ${menu.value} WHERE id = '${menu.id}'`;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
          if (err) {
              res.status(400).send(err);
          } else res.send(recordset);
        });
    });
});
app.get('/messages', function (req, res) {
    connection.connect(function (err) {
        connection.query('select * from contact_message', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        })
    });
});

app.post('/messages/new', (req, res) => {
    const mess = req.body;
    let sql = 'insert into contact_message(name, phone, email, message) ' +
        `values('${mess.name}','0${mess.phone}','${mess.email || ''}','${mess.message || ''}')` ;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});

app.post('/messages/update', (req, res) => {
    const solveId = req.body && req.body.id;
    let sql = 'UPDATE contact_message SET resolved = 1 WHERE id = ' + solveId;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});
// app.get('/employee/:id', function (req, res) {
//     connection.connect(function (err) {
//         connection.query('select * from employee where id = ' + req.params.id, function (err, recordset) {
//             if (err) console.log(err)
//             res.send(recordset);
//
//         });
//     });
// });
// app.get('/address', function (req, res) {
//     connection.connect(function (err) {
//         connection.query('select * from address', function (err, recordset) {
//             if (err) console.log(err)
//             res.send(recordset);
//
//         });
//     });
// });
//
// app.post('/employee/new', (req, res) => {
//     console.log("new employee" + req.body);
//     const newEmp = req.body;
//     let sql = 'insert into employee(name, gender, birthday, address) ' +
//               `values('${newEmp.name}',${newEmp.gender},${newEmp.birthday && '\''+moment(newEmp.birthday).format('DD/MM/YYYY')+'\''},'${newEmp.city}')` ;
//     connection.connect(function (err) {
//         connection.query(sql, function (err, recordset) {
//           if (err) throw err;
//           res.send(recordset);
//
//         });
//     });
// });
//
// app.post('/employee/edit', (req, res) => {
//     console.log(req.body);
//     const emp = req.body;
//     let sql = `update employee set name = '${emp.name}', gender = ${emp.gender}, birthday = ${emp.birthday && '\''+moment(emp.birthday).format('DD/MM/YYYY')+'\''}, city = '${emp.city}' where id = ${emp.id}` ;
//     connection.connect(function (err) {
//         connection.query(sql, function (err, recordset) {
//           if (err) throw err;
//           res.send(recordset);
//
//         });
//     });
// });
//
// app.post('/employee/delete', (req, res) => {
//     const emp = req.body;
//     let idList = [];
//     emp.forEach(item => idList.push(item.id))
//     let sqlDelete = `delete from employee where id in (` + idList.toString() + ')' ;
//     connection.connect(function (err) {
//         connection.query(sqlDelete, function (err, recordset) {
//           if (err) throw err;
//           res.send(recordset);
//
//         });
//     });
// });
// app.post('/login', (req, res) => {
//     const user = req.body.username;
//     const pwd = req.body.password;
//     let sqlLogin = `select * from user where username like '${user}' and password like '${pwd}'` ;
//     connection.connect(function (err) {
//         connection.query(sqlLogin, function (err, recordset) {
//           if (err) throw err;
//           res.send(recordset[0].username);
//
//         });
//     });
// });

module.exports = function(){
    let mysql      = require('mysql');
    let connection;
    function handleDisconnect() {
        connection = mysql.createConnection(db_config); // Recreate the connection, since
        connection.on('error', function(err) {
            console.log('db error', err);
            if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
                handleDisconnect();
            } else {
                throw err;
            }
        });
    }

    handleDisconnect();
    return connection;
}