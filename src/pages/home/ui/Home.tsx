import { TaskStatusColumnBox, WorkspaceBox } from 'shared/ui';

/** Main page */
export function Home() {
    return (
        <WorkspaceBox>
            <TaskStatusColumnBox width='tight'>TO-DO</TaskStatusColumnBox>
            <TaskStatusColumnBox width='wide'>I'm working on it</TaskStatusColumnBox>
            <TaskStatusColumnBox width='tight'>It's done</TaskStatusColumnBox>
        </WorkspaceBox>
    );
}
