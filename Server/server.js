import express from "express"
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser"
//import bcrypt from 'bcrypt'
import multer from "multer"
import path from "path"
import jwt from "jsonwebtoken"

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clothingdb"
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }

})

const upload = multer({
    storage: storage
})

con.connect(function(err){
    if(err) {
        console.log("Error in Connection");
    }
    else {
        console.log("Connected");
    }
})

app.get('/getProduct', (req, res) => {
    const sql = "SELECT * FROM clothings";
    con.query(sql, (err, result) => {
        if(err) return res.json({Error: "Get product error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})


app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM clothings where id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "Get product error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "Delete FROM clothings WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete product error in sql"});
        return res.json({Status: "Success"})
    })
})

app.post('/createproduct',upload.single('image'), (req, res) => {
    const sql = "INSERT INTO clothing (`clothingname`,`price`,`image`) VALUES (?)";
        const values = [
            req.body.clothingname,
            req.body.price,
            req.file.filename
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Inside singup query"});
            return res.json({Status: "Success"});
        })
    } )

    app.listen(3000, () => {
        console.log('Server running on port 3000');
      });
