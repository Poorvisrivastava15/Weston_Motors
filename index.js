const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());
const Meta_Tag = [
    {
        page: "home",
        pg_title: "Vision Vidya IAS Coaching for UPSC Aspirants",
        link: {
            rel: "canonical",
            href: "https://visionvidyaias.com/",
        },
        meta_1: {
            name: "description",
            content:
                "Vision Vidya is the Best Coaching Institute in Lucknow. We are a Top-Rated, 6+ yrs Experience Coaching Institute in India. For more Business and related Query Feel Free to contact Us.",
        },
        meta_2: {
            name: "keywords",
            content:
                "Vision vidya IAS provide you best Trainner for UPSC Aspirants. Vision Vidya is the Best Coaching Institute in Lucknow.",
        }
    }];




-
app.get("/", async (req, res) => {
  res.render("home/index" );
});

// app.get("/about", async (req, res) => {
//   res.render("about/index" , Meta_Tag[0]);
// });



app.get("/contact-us", async (req, res) => {
  res.render("contact_us/index");
});


app.get("/service", async (req, res) => {
  res.render("service/index");
});

app.get("/about", async (req, res) => {
  res.render("about/index");
});




const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});