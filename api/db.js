import pkg from "pg";
const  {Client} = pkg;

export const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "hanafi1234",
    database: "integer",

});

 await client.connect();
console.log("Terhubung Ke basisdata");