import { Task } from '../../../domain/entities/Task';

export interface TasksRepository {
    create(task: Task): Promise<void>;
    findTaskWithSameTitle(title: string): Promise<Task | null>;
}
