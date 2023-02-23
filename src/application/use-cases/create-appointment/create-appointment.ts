import { Appointment } from '../../../domain/entities/appointment';
import { AppointmentsRepository } from '../../../infra/database/repositories/appointment-repository';
import { IMailProvider } from '../../providers/mail-provider';

interface CreateAppointmentRequest {
    customer: string
    startsAt: Date
    endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
    constructor(
        private appointmentsRepository: AppointmentsRepository,
        private mailProvider: IMailProvider
    ) {}

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

        await this.mailProvider.sendMail({
            to: {
                email: `${appointment.customer}@gmail.com`,
                name: appointment.customer
            },
            from: {
                email: 'mycomapny@app.com',
                name: 'My Company'
            },
            body: `<p>Hello ${appointment.customer}, Your appointment is set for ${appointment.startsAt} with the emd at ${appointment.endsAt} </p>`,
            subject: 'Appointment confirmed'
        })

        return appointment
    }
}
