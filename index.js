import express from "express";
import bodyParser from "body-parser";




const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true}));

app.get("/", (req, res) => {
  res.render("homePage.ejs")
});

app.get("/home", (req, res) => {
  res.render("homePage.ejs")
});

app.get("/write", (req, res) => {
  res.render("writeBlog.ejs")
});
app.get("/regis", (req, res) => {
  res.render("signIn.ejs")
});
app.post("/blog",(req,res)=>{
  console.log(req.body);
 var title =req.body["title"];
 var desc=req.body["desc"];
 var content=req.body["blog"];
 
 
res.render("blogView.ejs",{
title,desc,content
})

});

app.get("/blog", (req, res) => {
  res.render("blogView.ejs")
});

app.get("/about", (req, res) => {
  res.render("about.ejs")
});

app.get("/log", (req, res) => {
  res.render("about.ejs")
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs")
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  