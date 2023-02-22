import { Appointment } from '../models/appointment'

export interface AppointmentsRepository {
    create(appointment: Appointment): Promise<void>
    findOverlapingAppointment(
        startsAt: Date,
        endsAt: Date
    ): Promise<Appointment | null>
}
