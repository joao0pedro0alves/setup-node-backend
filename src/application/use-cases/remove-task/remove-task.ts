import { TasksRepository } from '../../../infra/database/repositories/tasks-repository';

interface RemoveTaskRequest {
    taskId: string;
}

type RemoveTaskResponse = void;

export class RemoveTask {
    constructor(private tasksRepository: TasksRepository) {}

    async execute({ taskId }: RemoveTaskRequest): Promise<RemoveTaskResponse> {

        const task = await this.tasksRepository.findTask(taskId);

        if (!task) {
            throw new Error('Task not founded')
        }

        await this.tasksRepository.remove(taskId);
    }
}
