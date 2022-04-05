const express = require("express");
const exhbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const path = require("path");
const escPosPrint = require("./escpos/escpos-print");

const app = express();
const PORT = process.env.PORT || 3030;

const io = require("socket.io-client");
const socket = io("https://tablo-server.gp3.kz");
// const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("Connection succeeded");
});

socket.on("registered-users-amount", (data) => {
  console.log("registered user id", data.amount);
  
  if (data && data.amount) {
    escPosPrint(data.amount);
  }
});

const hbs = exhbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", homeRoutes);
app.post("/print", (req, res) => {
  socket.emit("registration", "");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
