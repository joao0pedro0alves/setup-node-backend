import { Appointment } from '../../../../domain/entities/appointment';
import { AppointmentsRepository } from '../appointment-repository';

export class PrismaAppointmentRepository implements AppointmentsRepository {
    create(appointment: Appointment): Promise<void> {
        throw new Error('Method not implemented.');
    }

    findOverlapingAppointment(
        startsAt: Date,
        endsAt: Date
    ): Promise<Appointment | null> {
        throw new Error('Method not implemented.');
    }
}
