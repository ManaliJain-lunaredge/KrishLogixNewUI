import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./Routes/index.js";
import dbConnect from "./dbConnection/index.js";


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

dotenv.config();

const allowedOrigins = [
  `https://${process.env.DOMAIN_URL}`,
  `https://www.${process.env.DOMAIN_URL}`,
  `${process.env.LOCAL_URL}`,
  "http://localhost:5173",
  "http://localhost:5180",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

// Database connection
dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Listening to port ", PORT);
    });
  })
  .catch((error) => {
    console.log("error in connecting database");
  });
