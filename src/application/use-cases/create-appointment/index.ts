import { InMemoryAppointmentsRepository } from '../../../infra/database/repositories/in-memory/in-memory-appointment-repository';
import { CreateAppointmentController } from './create-appointment-controller';
import { CreateAppointment } from './create-appointment';
import { MailtrapMailProvider } from '../../providers/implementations/mailtrap-provider';

const createAppointmentRepository = new InMemoryAppointmentsRepository();
const mailProvider = new MailtrapMailProvider();

const createAppointment = new CreateAppointment(
    createAppointmentRepository,
    mailProvider
);
const createAppointmentController = new CreateAppointmentController(
    createAppointment
);

export { createAppointmentController, createAppointment };
