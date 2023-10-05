//Task: Create a script named createTables.js to create the authors, books, 
//and author_book tables in the database using the connection string.

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
const createTable = await pool.query("CREATE TABLE authors 
(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
)");



//const data = await pool.query("SELECT * FROM authors;");
//const rows = data.rows;
console.log(createTable);

// close the connection
await pool.end();
