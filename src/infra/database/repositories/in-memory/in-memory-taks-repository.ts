import { Task } from "../../../../domain/entities/Task";
import { TasksRepository } from "../tasks-repository";

export class InMemoryTasksRepository implements TasksRepository {
    public items: Task[] = []

    async create(task: Task): Promise<void> {
        this.items.push(task)
    }

    async toogleTaskCompleted(taskId: string): Promise<Task | null> {
        const task = await this.findTask(taskId)
        
        if (task) {

            const taskIndex = this.items.findIndex(inMemoryTask => inMemoryTask.id === task.id)

            this.items[taskIndex] = new Task({
                id: task.id,
                title: task.title,
                completed: !task.completed,
            })

            return this.items[taskIndex]

        } else {
            return null
        }
    }


    async findTaskWithSameTitle(title: string): Promise<Task | null> {
        const sameTitleTask = this.items.find(inMemoryTask => inMemoryTask.title === title)

        if (sameTitleTask) {
            return sameTitleTask
            
        } else {
            return null
        }
    }

    async findTask(taskId: string): Promise<Task | null> {
        const task = this.items.find(inMemoryTask => inMemoryTask.id === taskId) ?? null
        return task
    }

    async remove(taskId: string): Promise<void> {
        this.items = this.items.filter(task => task.id !== taskId)
    }
}