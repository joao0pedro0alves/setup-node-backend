import { Task } from '../../../domain/entities/Task';
import { TasksRepository } from '../../../infra/database/repositories/tasks-repository';

interface CreateTaskRequest {
    title: string;
    completed: boolean;
}

type CreateTaskResponse = Task;

export class CreateTask {
    constructor(private tasksRepository: TasksRepository) {}

    async execute({ title, completed }: CreateTaskRequest): Promise<CreateTaskResponse> {

        const taskWithSameTitle = await this.tasksRepository.findTaskWithSameTitle(title)

        if (taskWithSameTitle) {
            throw new Error(
                'Another task use this title'
            )
        }

        const task = new Task({
            title,
            completed,
        });

        await this.tasksRepository.create(task);

        return task;
    }
}
