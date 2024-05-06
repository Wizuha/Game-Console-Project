const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1959Mini.",
  database: "shop",
});

client.connect();

module.exports = client;
