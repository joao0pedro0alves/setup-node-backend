import { describe, expect, it } from "vitest";
import { Task } from "../../../domain/entities/Task";
import { InMemoryTasksRepository } from "../../../infra/database/repositories/in-memory/in-memory-taks-repository";
import { CreateTask } from "./create-task";

describe('Create task', () => {
    it('should be able to create a task', () => { 
     
        const tasksRepository = new InMemoryTasksRepository()
        const createTask = new CreateTask(tasksRepository)
            
        expect(
            createTask.execute({
                completed: false,
                title: 'Read a book'
            })
        ).resolves.toBeInstanceOf(Task)
    })

    it('should not be able to create two tasks with same title', async () => { 
     
        const tasksRepository = new InMemoryTasksRepository()
        const createTask = new CreateTask(tasksRepository)

        await createTask.execute({
            completed: false,
            title: 'Read a book'
        })
            
        expect(
            createTask.execute({
                completed: false,
                title: 'Read a book'
            })
        ).rejects.toBeInstanceOf(Error)
        
    })
})