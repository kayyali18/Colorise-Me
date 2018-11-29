const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.locals.title = "Colourise Me";
app.use(express.static("public"), bodyParser.json());

app.set("port", process.env.PORT || 3000);

let projects = [{ obj1: "jho" }, { obk2: "dsfs" }];

//POST FOR THE ID REQUEST

// API/V1/PROJECTS

//GET (FOR ALL PROJECTS)
app.get("/api/v1/projects", (request, response) => {
  return response.status(200).json(projects);
});
//GET (SINGLE PROJECT BY ID)

//POST (ADD PROJECT TO DB)
app.post("/api/v1/projects", (request, response) => {
  console.log(request.body, "send me to the DB");
});

//API/V1/palettes
//POST PALETTE (TO COLOURS FIGURE OUT SCHEMA)
app.post("/api/v1/palettes", (request, response) => {
  console.log(request.body, "send me to DB");
});
//GET PALETTE (FOREIGN KEY)
app.get("/api/v1/palettes/:id", (request, response) => {
  //request.params.id
  //access DB to select correct project (foreign id)
  //respond with the palette
});
//GET PALETTE (ALL)
app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
