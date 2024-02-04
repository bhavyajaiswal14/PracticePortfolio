import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public")); //we write "public" because the image and css is relative to the public folder


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
