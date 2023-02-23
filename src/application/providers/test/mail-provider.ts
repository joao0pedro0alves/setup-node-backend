import { IMailProvider, IMessage } from "../mail-provider";

export class TestMailProvider implements IMailProvider {
    async sendMail(message: IMessage): Promise<void> {}
}
