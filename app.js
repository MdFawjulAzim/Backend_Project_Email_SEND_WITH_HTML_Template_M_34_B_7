import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import router from "./routes/api.js";

import {
    PORT,
    WEB_CACHE,
    MAX_JSON_SIZE,
    URL_ENCODE,
    REQUEST_TIME,
    REQUEST_NUMBER
} from "./app/config/config.js";

const app = express();

//Global Application Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));
app.use(helmet());
app.use(cookieParser());
// Rate Limiting middleware
const limiter =rateLimit({windowMs:REQUEST_TIME,max:REQUEST_NUMBER});
app.use(limiter);
  
//Web Caching
app.set('etag',WEB_CACHE);


//Set API Routes
app.use("/api",router);

//Run Your Express Back End Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});