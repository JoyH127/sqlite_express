
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the  database.');
});

db.serialize(() => {
  db.each(`SELECT * from Users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

module.exports = db;