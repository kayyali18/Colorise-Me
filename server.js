const express = require("express");
const app = express();

app.locals.title = "Colourise Me";
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

//POST FOR THE ID REQUEST

// API/V1/PROJECTS

//GET (FOR ALL PROJECTS)
//GET (SINGLE PROJECT BY ID)
//POST (ADD PROJECT TO DB)

//API/V1/COLOURS
//POST PALETTE (TO COLOURS FIGURE OUT SCHEMA)
//GET PALETTE (FOREIGN KEY)
//GET PALETTE (ALL)
app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
