import nodemailer from "nodemailer";
import { EmailTemplate } from './EmailTemplate.js';

import {
    EMAIL_FROM,
    EMAIL_HOST,
    EMAIL_PASS,
    EMAIL_PORT,
    EMAIL_SECURITY,
    EMAIL_USER
} from "../config/config.js";

const EmailSend = async ({emailTo,emailText,emailSubject})=>{
    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY,// Use `true` for port 465, `false` for other secure ports.
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        },
        secure: EMAIL_SECURITY
    });

    const info = {
        from: `Emil - ${EMAIL_FROM}`,//sender address 
        to: emailTo,
        subject: emailSubject,
        html: EmailTemplate({emailText})
    };

    return await transporter.sendMail(info);
}

export default EmailSend;