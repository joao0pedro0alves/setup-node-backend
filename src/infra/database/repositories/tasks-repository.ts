import { Task } from '../../../domain/entities/Task';

export interface TasksRepository {
    create(task: Task): Promise<void>;
    toogleTaskCompleted(taskId: string): Promise<Task | null>;
    findTask(taskId: string): Promise<Task | null>;
    findTaskWithSameTitle(title: string): Promise<Task | null>;
}
