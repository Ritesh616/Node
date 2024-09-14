var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const con = mysql.createConnection({
//   host: 'localhost',
//   user:"root",
//   password:"",
//   database:"electricity_management"
// });
// con.connect((err) =>{
//   if(err)
//   {
//     console.log(err)
//   }else{
//     console.log("connected")
//   }
// });

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const address = req.body.address;
  con.query(
    "insert into user values (?,?,?,?,?,?)",
    [name, email, phoneNo, password, confirmPassword, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("POSTED");
      }
    }
  );
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("on the port 3000");
  }
});
