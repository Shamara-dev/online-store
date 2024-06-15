interface FormFieldProps {
    name: string;
    label: string;
    type: string;
    value: string;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
    name,
    label,
    type,
    value,
    error,
    onChange,
}: FormFieldProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-1">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full py-1 px-3 border rounded-md ${
                    error && 'border-red-500'
                }`}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default FormField;
