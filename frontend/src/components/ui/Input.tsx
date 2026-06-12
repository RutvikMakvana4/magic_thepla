import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-brand">
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-2xl border-2 bg-white text-brand placeholder:text-brand-light/60
            outline-none transition-all duration-200 font-body
            ${error ? "border-red-400 focus:border-red-500" : "border-cream-dark focus:border-primary"}
            ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-brand-light">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
