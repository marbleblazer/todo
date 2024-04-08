import { TaskStatusColumn, WorkspaceBox } from 'shared/ui';

import { TasksAddingButtonForm } from 'entities/tasksAddingButtonForm';

/** Main page */
export function Home() {
    return (
        <WorkspaceBox>
            <TaskStatusColumn width='tight'>
                TO-DO
                <TasksAddingButtonForm />
            </TaskStatusColumn>
            <TaskStatusColumn width='wide'>I'm working on it</TaskStatusColumn>
            <TaskStatusColumn width='tight'>It's done</TaskStatusColumn>
        </WorkspaceBox>
    );
}
