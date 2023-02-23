import { InMemoryAppointmentsRepository } from "../../../infra/database/repositories/in-memory/in-memory-appointment-repository";
import { CreateAppointmentController } from "./create-appointment-controller";
import { CreateAppointment } from "./create-appointment";

const createAppointmentRepository = new InMemoryAppointmentsRepository()
const createAppointment = new CreateAppointment(createAppointmentRepository)
const createAppointmentController = new CreateAppointmentController(createAppointment)

export { createAppointmentController, createAppointment }