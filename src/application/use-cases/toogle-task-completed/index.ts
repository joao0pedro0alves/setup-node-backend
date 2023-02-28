import { PrismaTasksRepository } from "../../../infra/database/repositories/prisma/prisma-tasks-repository";
import { ToogleTaskCompleted } from "./toogle-task-completed";
import { ToogleTaskCompletedController } from "./toogle-task-completed-controller";

const tasksRepository = new PrismaTasksRepository()

const toogleTaskCompleted = new ToogleTaskCompleted(tasksRepository)
const toogleTaskCompletedController = new ToogleTaskCompletedController(toogleTaskCompleted)

export { toogleTaskCompleted, toogleTaskCompletedController }