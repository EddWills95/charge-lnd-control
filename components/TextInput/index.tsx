type Props = {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (any) => void;
    additionalClasses?: string;
};

const TextInput = ({
    label,
    placeholder,
    value,
    onChange,
    additionalClasses
}: Props) => {
    return (
        <div className="flex flex-col mb-4 w-64">
            {label && <label>{label}</label>}
            <input
                className={`text-black p-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${additionalClasses}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;
