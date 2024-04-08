import './styles/workspace.scss';

type TProps = {
    children: React.ReactNode;
};

/** Workspace main box */
export function WorkspaceBox({ children }: TProps) {
    return (
        <div className='workspace'>
            <div className='workspace__columns-wrapper'>{children}</div>
        </div>
    );
}
