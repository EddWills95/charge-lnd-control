import { ReactChildren, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    label?: string;
    additionalClasses?: string;
};

const Select = ({ children, label, additionalClasses }: Props) => {
    return (
        <div className="w-64">
            {label && <label>{label}</label>}
            <select
                className={`form-select text-black p-3 mb-4 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none w-full ${additionalClasses}`}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;
