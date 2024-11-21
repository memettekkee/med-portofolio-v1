const express = require('express')
require("dotenv").config();

const connectDB = require('./database/connectDB')
const learningRoute = require('./routes/learningRoutes')
const projectRoute = require('./routes/projectRoutes')

const app = express()
const port = 8070
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    method: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

connectDB();

app.use('/learning', learningRoute)
app.use('/project', projectRoute)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})