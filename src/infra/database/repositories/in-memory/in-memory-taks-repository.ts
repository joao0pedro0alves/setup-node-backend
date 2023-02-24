import { Task } from "../../../../domain/entities/Task";
import { TasksRepository } from "../tasks-repository";

export class InMemoryTasksRepository implements TasksRepository {
    public items: Task[] = []

    async create(task: Task): Promise<void> {
        this.items.push(task)
    }

    async findTaskWithSameTitle(title: string): Promise<Task | null> {
        const sameTitleTask = this.items.find(inMemoryTask => inMemoryTask.title === title)

        if (sameTitleTask) {
            return sameTitleTask
            
        } else {
            return null
        }
    }
}