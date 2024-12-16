import express from 'express';
const router = express.Router();
import * as EmailController from "../app/controllers/EmailController.js";

router.get("/send-email",EmailController.emailSend);

export default router;