const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://chanjalchandran:chanjalchandran@blog.vzvrscm.mongodb.net/?retryWrites=true&w=majority&appName=Blog";

mongoose
  .connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
