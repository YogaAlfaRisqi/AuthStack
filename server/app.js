const express = require('express')
const app = express()
require('dotenv').config();

// Ambil port dari .env atau default ke 5000
const PORT = process.env.PORT || 5000

const routes = require('./routes');
app.use('/api',routes);

app.listen(PORT, () => {
  console.log("app listening on port : ", PORT)
})
