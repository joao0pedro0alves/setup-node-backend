import { Task } from '../../../../domain/entities/Task';
import { TasksRepository } from '../tasks-repository';
import { prisma } from '../../../../lib/prisma';

export class PrismaTasksRepository implements TasksRepository {
    async create({ id, completed, title }: Task): Promise<void> {
        if (id) {
            await prisma.task.create({
                data: {
                    id,
                    completed,
                    title,
                },
            });
        } else {
            throw new Error('Task without "id" cannot be created.')
        }
    }

    async findTaskWithSameTitle(title: string): Promise<Task | null> {
        const sameTitleTask = await prisma.task.findUnique({
            where: {
                title
            }
        })

        if (sameTitleTask) {
            return new Task({
                id: sameTitleTask.id,
                completed: sameTitleTask.completed,
                title: sameTitleTask.title
            })
        } else {
            return null
        }
    }
}
