const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

//express middlewareeeee
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));