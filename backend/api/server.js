const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const AuthRouter = require('../auth/auth-router.js');
const PartyRouter = require('../parties/party-router.js');
const TodoRouter = require('../todoList/todo-list-router.js');
const ItemRouter = require('../shoppingList/shopping-list-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/party', AuthRouter);
server.use('/api/party', PartyRouter);
server.use('/api/party', TodoRouter);
server.use('/api/party', ItemRouter);

server.get("/", (req, res) => {
  res.send("It's alive!!");
});

module.exports = server;
