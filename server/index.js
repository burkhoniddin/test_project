const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: '',
//     database: 'employeeSystem'
// });

// const db = mysql.createConnection({
//     user: 'test_remote',
//     host: '35.206.91.168',
//     password: 'test_remote',
//     database: 'staff'
// });

// const db = mysql.createConnection({
//     user: 'uonlwp1libgsw',
//     host: 'it20.siteground.eu',
//     password: '10102000nBd!',
//     database: 'dbsamgbrevzrzm'
// });

const db = mysql.createConnection({
    user: 'test_remote',
    host: '35.206.91.168',
    password: 'test_remote',
    database: 'staff'
});




app.post("/create", (req, res) => {
    console.log(req.body);

    const code = req.body.code;
    const width = req.body.width;
    const rows = req.body.rows;
    const height = req.body.height;
    const space_b_rows = req.body.space_b_rows;
    const gap_raport = req.body.gap_raport;


    db.query('INSERT INTO production (CODE, Width, Rowss, Height, Space_Between_Rows, GAP_RAPORT) VALUES (?,?,?,?,?,?)', 
                [code, width, rows, height, space_b_rows, gap_raport],
                (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send("Values Inserted");
                    }
                }
    );

});

app.get("/knives", (req, res) => {
    db.query("SELECT * FROM production", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.listen(3001, () => {
    console.log("Masha'Allah, your server is running on port 3001");
})