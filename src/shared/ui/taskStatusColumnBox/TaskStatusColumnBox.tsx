import './styles/taskStatusColumnBox.scss';

type TProps = {
    children: React.ReactNode;
    width: string;
};

/** Column box for workspace (tasks will be stacked there) */
export function TaskStatusColumnBox({ children, width }: TProps) {
    return (
        <div className={width === 'tight' ? 'task-status-column-box__tight' : 'task-status-column-box__wide'}>
            {children}
        </div>
    );
}
