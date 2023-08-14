const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://comeandsee:1bUMm5HPJzxgQ51I@cluster0.rsdtyzi.mongodb.net/db-contacts";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
