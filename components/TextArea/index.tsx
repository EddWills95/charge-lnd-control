type Props = {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (any) => void;
    additionalClasses?: string;
    spellCheck?: boolean;
};

const defaultProps = {
    spellCheck: true
};

const TextArea = ({
    label,
    placeholder,
    value,
    onChange,
    additionalClasses,
    spellCheck,
    ...props
}: Props) => {
    return (
        <div className={`flex flex-col mb-4 w-64 ${additionalClasses}`}>
            {label && <label>{label}</label>}
            <textarea
                {...props}
                spellCheck={spellCheck}
                className={`text-black p-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ${additionalClasses}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

TextArea.defaultProps = defaultProps;

export default TextArea;
