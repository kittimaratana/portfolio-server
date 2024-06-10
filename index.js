const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const blogRoutes = require('./routes/blog-routes');
const konnectRoutes = require('./routes/konnect-routes');

// Express middleware
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use((req, _res, next) => {
    next();

});

// // Configuring blog and konnect endpoints
app.use('/api/blog', blogRoutes);
app.use('/api/konnect', konnectRoutes);

app.get('/', (_req, res) => {
    res.send('Welcome to Portfolio API');
  });

app.listen(PORT, function () {
    console.log(`Server is now listening at ${PORT}`);
});