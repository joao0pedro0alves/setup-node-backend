import { v4 } from 'uuid';

interface TaskProps {
    id?: string;
    title: string;
    completed: boolean;
}

export class Task {
    private props: TaskProps;

    get id() {
        return this.props.id
    }

    get title() {
        return this.props.title;
    }

    get completed() {
        return this.props.completed;
    }

    constructor(props: TaskProps) {
        const { id, completed } = props;

        if (!id && completed) {
            throw new Error('Task cannot be create as completed.');
        }

        this.props = props;

        if (!id) {
            this.props.id = v4();
        }
    }
}
