const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require("./routes")

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//  mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

//require routes
app.use(routes);


//app.listen
app.listen(PORT, ()=> {
    console.log(`Server listening on PORT ${PORT}`)
})