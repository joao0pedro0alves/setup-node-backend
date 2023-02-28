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

    async toogleTaskCompleted(taskId: string): Promise<Task | null> {
        const task = await this.findTask(taskId)
        
        if (task) {
            const updatedTask = await prisma.task.update({
                where: {
                    id: taskId
                },
                data: {
                    completed: !task.completed
                }
            })

            return new Task({
                id: updatedTask.id,
                completed: updatedTask.completed,
                title: updatedTask.title
            })

        } else {
            return null
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

    async findTask(taskId: string): Promise<Task | null> {
        const task = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        if (task) {
            return new Task({
                id: task.id,
                completed: task.completed,
                title: task.title
            })
        } else {
            return null
        }
    }
}
