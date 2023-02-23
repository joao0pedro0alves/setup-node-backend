import nodemailer from 'nodemailer';
import { IMessage, IMailProvider } from "../mail-provider";
import { MAIL_HOST, MAIL_PORT, MAIL_PASS, MAIL_USER } from "../../../config/app";

export class MailtrapMailProvider implements IMailProvider {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: MAIL_PORT,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASS
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
        })
    }
}