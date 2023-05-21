const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

function delay(duration) {
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {
        // event loop is blocked
    }
}

app.get("/", (req, res) => {
    // JSON.stringify({} => "{}");
    // JSON.parse("{}") => {};
    // [1, 2, 3, 4, 0].sort()

    res.send(`Performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
    // Delay the response
    delay(9000);

    res.send(`Ding ding ding ${process.pid}`);
});

console.log("Running server.js");
console.log("Master has been started...");
app.listen(3000);
