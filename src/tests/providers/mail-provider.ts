import { IMailProvider, IMessage } from '../../application/providers/mail-provider';

export class TestMailProvider implements IMailProvider {
    async sendMail(message: IMessage): Promise<void> {}
}
