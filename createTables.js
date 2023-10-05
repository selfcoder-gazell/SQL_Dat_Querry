// imort the pg package
import pg from "pg";

// connect to the database
//get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

//Create a new pool instance
const pool = new pg.Pool({
  connectionString,
  // Remember to pass in your connection details connectionString
});

//send a querry - create tables;
const createTableAuthors = await pool.query(
  "CREATE TABLE authors(ID INT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255));"
);

const createTableBooks = await pool.query(
  "CREATE TABLE books(ID INT PRIMARY KEY, title VARCHAR(255), published_date DATE);"
);

const createTableAuthorBook = await pool.query(
  "CREATE TABLE author_book(author_id INT, book_id INT, PRIMARY KEY (author_id, book_id));"
);

const rowsAuthors = createTableAuthors.rows;
console.log(rows);

const rowsBooks = createTableBooks.rows;
console.log(rows);

const rowsAuthorbook = createTableAuthorBook.rows;
console.log(rows);

// close the connection
await pool.end();