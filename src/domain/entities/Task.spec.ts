import { expect, test } from 'vitest';
import { Task } from './Task';

test('create a task', () => {
    const task = new Task({
        completed: false,
        title: 'Passear com o meu cachorro.',
    });

    expect(task).toBeInstanceOf(Task);
    expect(task.completed).toEqual(false);
});

test('cannot create a task as completed', () => {
    expect(() => {
        return new Task({
            completed: true,
            title: 'Passear com o meu cachorro.',
        });
    }).toThrow();
});
