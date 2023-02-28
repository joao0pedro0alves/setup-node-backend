import { Task } from '../../../domain/entities/Task';
import { TasksRepository } from '../../../infra/database/repositories/tasks-repository';

interface ToogleTaskCompletedRequest {
    taskId: string;
}

type ToogleTaskCompletedResponse = Task;

export class ToogleTaskCompleted {
    constructor(private tasksRepository: TasksRepository) {}

    async execute({ taskId }: ToogleTaskCompletedRequest): Promise<ToogleTaskCompletedResponse> {
        const task = await this.tasksRepository.findTask(taskId);

        if (!task) {
            throw new Error('Task is not found');
        }

        const updatedTask = await this.tasksRepository.toogleTaskCompleted(taskId);

        if (!updatedTask) {
            throw new Error('Unexpected error');
        }

        return new Task({
            title: updatedTask.title,
            id: updatedTask.title,
            completed: updatedTask.completed,
        });

    }
}
