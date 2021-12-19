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
};

const Button = ({ children, onClick, type }: Props) => {
    const buttonClasses = useMemo(() => {
        let classes;
        switch (type) {
            case ButtonType.primary:
                classes = 'bg-orange-300 text-slate-800';
                break;
            case ButtonType.secondary:
                classes = 'bg-sky-500 text-white w-40';
                break;
            default:
                classes = '';
        }
        return classes;
    }, [type]);

    return (
        <button
            className={`w-48 rounded-md px-4 py-2 m-2 shadow-lg ${buttonClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = defaultProps;

export default Button;
