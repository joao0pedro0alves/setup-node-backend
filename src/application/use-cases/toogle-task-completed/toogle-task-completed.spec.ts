import { describe, expect, it } from "vitest";
import { Task } from "../../../domain/entities/Task";
import { InMemoryTasksRepository } from "../../../infra/database/repositories/in-memory/in-memory-taks-repository";
import { ToogleTaskCompleted } from "./toogle-task-completed";
import { CreateTask } from "../create-task/create-task";

describe('Toogle task completed status', () => {
    it('should be able to toogle task completed status', async () => {

        const tasksRepository = new InMemoryTasksRepository()

        const createTask = new CreateTask(tasksRepository)
        const toogleTaskCompleted = new ToogleTaskCompleted(tasksRepository)

        const sampleTask = await createTask.execute({
            completed: false,
            title: 'Read a book'
        })

        if (sampleTask?.id) {

            const updatedTask = await toogleTaskCompleted.execute({
                taskId: sampleTask.id
            })

            expect(updatedTask).toBeInstanceOf(Task)
            expect(updatedTask.completed).toEqual(true)
            expect(tasksRepository.items.length).toEqual(1)
            expect(tasksRepository.items[0].completed).toEqual(true)
        }
    })
})