import { useState } from "react";

export function Input({
  type,
  label,
  placeholder,
  onChange,
}: {
  type: string;
  label?: string;
  placeholder: string;
  onChange: (value: string | number) => void;
}) {
  const [currentState, setCurrentState] = useState("");
  const handleChange = (event: React.SyntheticEvent<EventTarget>) => {
    const newValue = (event.target as HTMLInputElement).value;
    setCurrentState(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label
        htmlFor="CustomInput"
        className="block text-xs font-medium text-gray-700"
      >
        {" "}
        {label}{" "}
      </label>
      <input
        type={type}
        id="CustomInput"
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        value={currentState}
        onChange={handleChange}
      />
    </div>
  );
}
