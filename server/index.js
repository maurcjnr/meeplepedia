const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "meeplepedia",
});

// const db = mysql.createPool({
//   host: "localhost",
//   user: "meeple92_4dm1n",
//   password: "senha5",
//   database: "meeple92_meeplepedia",
// });

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    // origin: ["https://meeplepedia.com.br"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    key: "userID",
    secret: "meeplepedia@2021",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM games";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;

  const sqlInsert = "INSERT INTO games (name, gender) VALUES (?,?)";

  db.query(sqlInsert, [name, gender], (err, result) => {
    if (err) console.log(err);
  });
});

app.delete("/api/delete/:RPGSystem", (req, res) => {
  const id = req.params.RPGSystem;

  const sqlDelete = "DELETE FROM games WHERE id = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;

  const sqlUpdate = "UPDATE games SET name = ? WHERE id = ?";

  db.query(sqlUpdate, [name, id], (err, result) => {
    if (err) console.log(err);
  });
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const birthday = req.body.birthday;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert =
    "INSERT INTO users (name, birthday, username, email, password) VALUES (?,?,?,?,?)";

  const sqlSelect = "SELECT username FROM users WHERE username = ?";

  db.query(sqlSelect, username, (err, result) => {
    if (result.length != 0) {
      res.send("Usuário já existe.");
    } else {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) console.log(err);
        db.query(
          sqlInsert,
          [name, birthday, username, email, hash],
          (err, result) => {
            if (err) console.log(err);
          }
        );
      });
    }
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("Você precisa de um token.");
  } else {
    jwt.verify(token, "meeplepedia@2021", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Você falhou na autenticação." });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("Você está autenticado.");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlSelect = "SELECT * FROM users WHERE username = ?";

  db.query(sqlSelect, username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "meeplepedia@2021", {
            expiresIn: 300,
          });
          req.session.user = result;
          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Usuário/senha digitado está incorreto.",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "Usuário não existe." });
    }
  });
});

app.get("/check/users", (req, res) => {
  const sqlSelect = "SELECT * FROM users";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/logout", (req, res) => {
  req.session.user = false;

  res.json({
    auth: false,
    token: null,
    message: "Deslogado com sucesso.",
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
