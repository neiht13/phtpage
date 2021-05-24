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
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
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
app.get('/api/menu_bar', function (req, res) {
    connection.connect(function (err) {
        connection.query('select * from menu_bar order by value', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        })
    });
});

app.post('/api/menu_bar', (req, res) => {
    console.log("new menu" + req.body);
    const menu = req.body;
    let sql = 'insert into menu_bar(id, name, value) ' +
        `values('${menu.id || ''}','${menu.name || ''}',${menu.value || ''})` ;
    let sql2 = `insert into block_content(id) values('${menu.id}')`
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
        // connection.query(sql2, function (err, recordset) {
        //     if (err) {
        //         res.status(400).send(err);
        //     }
        // });
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

app.put('/api/messages', (req, res) => {
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
app.post('/block-content/update', (req, res) => {
    const content = req.body;
    let sql = `UPDATE block_content SET 
                    title = '${content.title}', 
                    text = '${content.text}', 
                    sub_1_title = '${content.title}', 
                    text = '${content.text}', 
                    title = '${content.title}', 
                    sub_2_title = '${content.text}', 
                    title = '${content.title}', 
                    text = '${content.text}', 
                    sub_3_title = '${content.title}', 
                    text = '${content.text}', 
                    title = '${content.title}', 
                    button_name_1 = '${content.text}', 
                    title = '${content.title}', 
                    text = '${content.text}', 
                    button_name_2 = '${content.title}', 
                    text = '${content.text}', 
                    title = '${content.title}', 
                    image = '${content.text}',  
                    background = '${content.title}', 
                    position = '${content.text}',  
                    effect = '${content.title}'
               WHERE id = '${content.id}'`;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});

app.get('/footer', function (req, res) {
    connection.connect(function (err) {
        connection.query('select * from footer', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        })
    });
});
app.post('/footer/new', (req, res) => {
    const footer = req.body;
    let sql = `INSERT INTO footer VALUES( 
                    null, 
                    '${footer.title}', 
                    '${footer.sub_1}', 
                    '${footer.sub_1_content}', 
                    '${footer.sub_2}', 
                    '${footer.sub_2_content}', 
                    '${footer.sub_3}', 
                    '${footer.sub_3_content}', 
                    '${footer.sub_4}', 
                    '${footer.sub_4_content}'
               )`;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});

app.post('/footer/update', (req, res) => {
    const footer = req.body;
    let sql = `UPDATE footer SET 
                    title = '${footer.title}', 
                    sub_1 = '${footer.sub_1}', 
                    sub_1_content = '${footer.sub_1_content}', 
                    sub_2 = '${footer.sub_2}', 
                    sub_2_content = '${footer.sub_2_content}', 
                    sub_3 = '${footer.sub_3}', 
                    sub_3_content = '${footer.sub_3_content}', 
                    sub_4 = '${footer.sub_4}', 
                    sub_4_content = '${footer.sub_4_content}'
               
               WHERE id = '${footer.id}'`;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});

app.post('/footer/delete', (req, res) => {
    const item = req.body;
    let sqlDelete = `delete from footer where id like '` + item.id + `'` ;
    connection.connect(function (err) {
        connection.query(sqlDelete, function (err, recordset) {
            if (err) res.send(recordset);
            res.send(recordset);
        });
    });
});

app.get('/system', function (req, res) {
    connection.connect(function (err) {
        connection.query('select * from system', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        })
    });
});
app.post('/system/update', (req, res) => {
    const system = req.body;
    let sql = `UPDATE system SET 
                    primary_color = '${system.primary_color}', 
                    primary_font= '${system.primary_font}', 
                    primary_font_color = '${system.primary_font_color}'
               WHERE id = '${system.id}'`;
    connection.connect(function (err) {
        connection.query(sql, function (err, recordset) {
            if (err) {
                res.status(400).send(err);
            } else res.send(recordset);
        });
    });
});

// module.exports = function(){
//     let mysql      = require('mysql');
//     let connection;
//     function handleDisconnect() {
//         connection = mysql.createConnection(db_config); // Recreate the connection, since
//         connection.on('error', function(err) {
//             console.log('db error', err);
//             if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//                 handleDisconnect();
//             } else {
//                 throw err;
//             }
//         });
//     }
//
//     handleDisconnect();
//     return connection;
// }