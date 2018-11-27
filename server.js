const express = require("express");
const app = express();

app.locals.title = "Colourise Me";
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
