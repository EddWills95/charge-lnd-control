import React, { useMemo } from 'react';

export enum ButtonType {
    primary,
    secondary
}

const defaultProps = {
    type: ButtonType.primary
};

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    type?: ButtonType;
    additionalClasses?: string;
};

const Button = ({ children, onClick, additionalClasses, type }: Props) => {
    const buttonClasses = useMemo(() => {
        let classes;
        switch (type) {
            case ButtonType.primary:
                classes = 'bg-orange-300 text-slate-800 hover:bg-orange-500';
                break;
            case ButtonType.secondary:
                classes = 'bg-sky-500 text-white w-40 hover:bg-sky-700';
                break;
            default:
                classes = '';
        }
        return classes;
    }, [type]);

    return (
        <button
            className={`w-48 rounded-md px-4 py-2 m-2 shadow-lg ${buttonClasses} ${additionalClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = defaultProps;

export default Button;
