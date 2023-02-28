import { PrismaTasksRepository } from "../../../infra/database/repositories/prisma/prisma-tasks-repository";
import { RemoveTask } from "./remove-task";
import { RemoveTaskController } from "./remove-task-controller";

const tasksRepository = new PrismaTasksRepository()

const removeTask = new RemoveTask(tasksRepository)
const removeTaskController = new RemoveTaskController(removeTask)

export { removeTask, removeTaskController }