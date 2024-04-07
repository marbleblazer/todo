import './styles/workspaceBox.scss';

export type TChildrenProp = {
    children: React.ReactNode;
};

/** Workspace main box */
export function WorkspaceBox({ children }: TChildrenProp) {
    return (
        <div className='workspace-box'>
            <div className='workspace-box__wrapper'>{children}</div>
        </div>
    );
}
