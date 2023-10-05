// imort the pg package
import pg from "pg";

// connect to the database
//get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;


//Create a new pool instance 
const pool = new pg.Pool ({connectionString
    // Remember to pass in your connection details connectionString
});

//send a querry - SELECT * FROM BOOKS;
const data = await pool.query("SELECT * FROM authors;");
const rows = data.rows;
console.log(rows);

// close the connection
await pool.end();
