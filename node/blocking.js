// <----- Blocking/Non-blocking ----->

const fs = require("fs");
console.log("1. First Log")

// Non-Blocking
fs.readFile("sample.json", (err, res) => {
    console.log("2. Non-Blocking Thread", res.toString());
});

// Blocking
const res = fs.readFileSync("sample.json").toString();
console.log("3. Blocking Thread", res);

console.log("4. Second Log")
console.log("5. Third Log")
