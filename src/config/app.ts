import dotenv from 'dotenv';
dotenv.config();

export const MAIL_HOST = process.env.MAIL_HOST ?? ""
export const MAIL_PORT = Number(process.env.MAIL_PORT)
export const MAIL_USER = process.env.MAIL_USER ?? ""
export const MAIL_PASS = process.env.MAIL_PASS ?? ""