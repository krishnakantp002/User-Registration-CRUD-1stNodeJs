const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const pool = require ('./config/db.js');
const userRoute = require('./routes/user.routes.js')
const createUserTable = require('./data/createUserTale.js')

dotenv.config ();
const app = express ();

port = process.env.PORT || 3000;

//Middleware
app.use (cors ());
app.use (express.json ());

//Routes
app.use('/api',userRoute)

//Error handling middleware


//creating table if not exists
createUserTable();


//testing mysql connection
app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT DATABASE() as currentDB");
    res.json({message : "db connected successfully",rows : rows});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



//server ruunning
app.listen (port, () => {
  console.log (`Server is running on port http://localhost:${port}`);
});