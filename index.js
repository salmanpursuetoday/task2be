const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const studentRoutes = require('./src/routes/Student');
const resultRoutes = require('./src/routes/Result');
const adminRoutes = require('./src/routes/Admin');

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.bgxjk.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log(`MongoDB Connected…`)
  })

app.use(cors());
app.use(express.json());
app.use("/api/student", studentRoutes);
app.use("/api/result", resultRoutes);
app.use("/api/admin", adminRoutes);


app.listen(process.env.PORT, () => {
  console.log(`server up ${process.env.PORT}`);
})
