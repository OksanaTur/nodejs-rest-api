const mongoose = require("mongoose");

const app = require('./app')
// jqGSyCBldETlK6Ng
const { DB_HOST } = process.env;


mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000);
  console.log("Database connection successful");
})
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})

