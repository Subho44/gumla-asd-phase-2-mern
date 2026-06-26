const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const courseroute = require("./routes/courseroutes");

dotenv.config();
const app = express();
connectdb();
app.use(cors());
app.use("/api/courses", courseroute);
app.get('/', (req, res) => {
    res.send("api is working");
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log("server is running 5600");
});

