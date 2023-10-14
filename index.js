const express = require("express");
const cors = require("cors");

const { notFound, errorHandler } = require("./middleware/error.middleware");
const usersRoutes = require("./routes/user.route.js");
const app = express();

const port = 8000 || process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: ["https://responsive-landing-page-tan.vercel.app"],
    credentials: true,
  })
);

app.use("/api/users", usersRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
