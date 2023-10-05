//Create a script named connect.js to establish a connection to the 
//ElephantSQL database using a connection string, 
//log a success message, and close the connection.

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

console.log("Connection has been established");

// close the connection
await pool.end();
