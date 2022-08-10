const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

const route = require('./src/routes/presentes.route');
const connectToDatabase = require('./src/database/database');

app.use(cors());
app.use(express.json());
connectToDatabase();


app.use('/presentes', route);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}! ;D`);
});
