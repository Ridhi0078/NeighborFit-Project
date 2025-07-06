const express = require('express');
const cors=require('cors');
const {connectMongoDb}=require('./connection');
// const neighbourhood = require("../neighborhood_sample_data_numeric_ids.json")
const neighbourRouter=require('./routes/neighbour');
const userRouter=require('./routes/user');
const matchRouter=require('./routes/match');
require("dotenv").config({ path: "./config.env" });

const {logReqRes}=require('./middlewares');

const app = express();
const PORT = 3000;
app.use(cors());
// connection
connectMongoDb('mongodb://127.0.0.1:27017/NeighborFit').then(()=>console.log("Mongo db Connected"));

// Middleware - plugin

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logReqRes('log.txt'));

// Routes
app.use("/api/neighbour",neighbourRouter);
app.use("/api/user",userRouter);
app.use('/api/match', matchRouter);

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
})

