import { Appointment } from '../../domain/entities/appointment'
import { AppointmentsRepository } from '../../infra/database/repositories/appointment-repository'

interface CreateAppointmentRequest {
    customer: string
    startsAt: Date
    endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
    constructor(private appointmentsRepository: AppointmentsRepository) {}

    async execute({ customer, endsAt, startsAt }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const overlappingAppointment =
            await this.appointmentsRepository.findOverlapingAppointment(
                startsAt,
                endsAt
            )

        if (overlappingAppointment) {
            throw new Error(
                'Another appointment overlaps this appointment dates'
            )
        }

        const appointment = new Appointment({
            customer,
            endsAt,
            startsAt,
        })

        await this.appointmentsRepository.create(appointment)

        return appointment
    }
}
