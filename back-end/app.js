const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const { route } = require("./routes/transacations");
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
readdirSync("./routes").map((route) =>
    app.use("/api/v1", require("./routes/" + route))
);
app.get("/", (req, res) => {
    return res.send("Hello from Avneesh's Home");
});
const server = () => {
    db();
    app.listen(PORT, () => {
        console.log("listening on " + PORT);
    });
};
server();
