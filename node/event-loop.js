// <----- Event Loop ----->

// Operation Steps
// 1. Sync code
// 2. process.nextTick, Promises
// 3. Timers
// 4. File System

const fs = require('fs')
fs.readFile("sample.json", (e, data) => console.log("2. Second", data.toString()))
console.log('2. Second');
setTimeout(() => console.log('3. Third'), 0);
Promise.resolve().then(() => console.log('4. Fourth'));
console.log('5. Fifth');