import express from "express";
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import winston from "winston"
import expressWinston from "express-winston"
import v1 from "./routes/v1";


// setup express class
const app = express();
// setup logging
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
  }));
// setup express json parser
app.use(express.json());
// setup helmet
app.use(helmet());
// setup cors
app.use(cors());
// setup cookie parser
app.use(cookieParser());
// set up routes
app.use("/v1", v1);

// setup express server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});