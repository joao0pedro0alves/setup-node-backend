import { describe, expect, it } from "vitest";
import { InMemoryTasksRepository } from "../../../infra/database/repositories/in-memory/in-memory-taks-repository";
import { CreateTask } from "../create-task/create-task";
import { RemoveTask } from "./remove-task";

describe('Remove task', () => {
    it('should be able to remove a task', async () => { 
     
        const tasksRepository = new InMemoryTasksRepository()
        const removeTask = new RemoveTask(tasksRepository)
        const createTask = new CreateTask(tasksRepository)
        
        const task = await createTask.execute({
            completed: false,
            title: 'Read a book'
        })

        expect(tasksRepository.items.length).toEqual(1)

        if (task.id) {
            await removeTask.execute({ taskId: task.id })
            expect(tasksRepository.items.length).toEqual(0)
        }  
    })

    it('should not be able to remove task nonexistent', async () => { 

        const tasksRepository = new InMemoryTasksRepository()
        const removeTask = new RemoveTask(tasksRepository)

        expect(
            removeTask.execute({ taskId: 'not-found-id' })
        ).rejects.toBeInstanceOf(Error)
    })
})