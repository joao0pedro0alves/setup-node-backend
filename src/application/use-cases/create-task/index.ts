// import { InMemoryTasksRepository } from "../../../infra/database/repositories/in-memory/in-memory-taks-repository";
import { PrismaTasksRepository } from "../../../infra/database/repositories/prisma/prisma-tasks-repository";
import { CreateTask } from "./create-task";
import { CreateTaskController } from "./create-task-controller";

// const tasksRepository = new InMemoryTasksRepository()
const tasksRepository = new PrismaTasksRepository()

const createTask = new CreateTask(tasksRepository)
const createTaskController = new CreateTaskController(createTask)

export { createTask, createTaskController }