import './styles/button.scss';

type Button = {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    text?: string;
    onClick?: () => void;
};

export function Button({ type = 'button', className = '', text, onClick = () => {} }: Button) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
