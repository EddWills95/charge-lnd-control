import { Dispatch, ReactChildren, ReactNode, SetStateAction } from 'react';

type Props = {
    children: ReactNode;
    label?: string;
    value: any;
    onChange: (value: any) => void;
    additionalClasses?: string;
};

const Select = ({
    children,
    label,
    onChange,
    value,
    additionalClasses
}: Props) => {
    return (
        <div className="w-64">
            {label && <label>{label}</label>}
            <select
                value={value}
                onChange={({ target: { value } }) => {
                    onChange(value);
                    console.log(value);
                }}
                className={`form-select text-black p-3 mb-4 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none w-full ${additionalClasses}`}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;
