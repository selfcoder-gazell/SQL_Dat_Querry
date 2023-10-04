// imort the pg package
import { Pool } from "pg";

// connect to the database


//Create a new pool instance 
const pool = new Pool ({
    // Remember to pass in your connection details
})

//send a querry - SELECT * FROM BOOKS;
const result = await pool.query("SELECT * FROM books;");
console.log(result);

// close the connection
await pool.end();
