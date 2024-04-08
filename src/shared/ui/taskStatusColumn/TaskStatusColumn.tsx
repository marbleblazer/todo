import './styles/taskStatusColumn.scss';

type TProps = {
    children: React.ReactNode;
    width: string;
};

/** Column box for workspace (tasks will be stacked there) */
export function TaskStatusColumn({ children, width }: TProps) {
    return <div className={width === 'tight' ? 'task-status-column-tight' : 'task-status-column-wide'}>{children}</div>;
}
