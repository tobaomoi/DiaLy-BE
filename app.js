const mongoose = require("mongoose");
const express = require("express");
const api = require("./routes/api");
const CORS = require("cors");

const app = express();

app.use(
    CORS({
        origin: '*',
        optionsSuccessStatus:200,
        credentials:true,
    })
);
app.use(express.json());

app.use("/", api);

const DATABASE_URL = "mongodb+srv://imminhat:minhnhat9930306@cluster0.zhhen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
    DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error) {
            console.log("Failed to connect to MongoDB");
            console.log(error);
        }
        else {
            console.log("Connected to MongoDB");
        }
    }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Express app is listening at port ${PORT}`);
})