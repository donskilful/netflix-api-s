const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config(); 

mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected")).catch(err=>console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to netflix api's`);
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);


app.listen(process.env.PORT, () => { // do not add localhost here if you are deploying it
    console.log("server listening to port " + process.env.PORT);
 });
