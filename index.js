require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const articlesRoutes = require('./routes/articles-routes');
const projectsRoutes = require('./routes/projects-routes');

//allows request to get static assets in /public folder
app.use(express.static("public"));

//enable PORT AND cors to define server and client environment variables
const PORT = process.env.PORT || 5001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "https://kittimaratana.com";

// Express middleware
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use((req, _res, next) => {
    next();
});

// // Configuring blog and konnect endpoints
app.use('/articles', articlesRoutes);
app.use('/projects', projectsRoutes);

app.get('/', (_req, res) => {
    res.send('Welcome to Portfolio API');
  });

app.listen(PORT, function () {
    console.log(`Server is now listening at ${PORT}`);
});