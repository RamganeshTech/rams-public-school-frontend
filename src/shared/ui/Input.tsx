import React, { useId } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: string; // e.g., "fa-regular fa-user"
  mandatory?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  icon, 
  mandatory, 
  className = '', 
  ...props 
}) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className="block text-sm font-bold text-foreground mb-2">
        {label} {mandatory && <span className="text-primary">*</span>}
      </label>
      
      <div className="relative">
        {/* Optional Icon */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted">
            <i className={icon} aria-hidden="true"></i>
          </div>
        )}
        
        <input
          id={id}
          className={`w-full rounded-2xl border bg-mainBg py-3.5 pr-4 text-foreground transition-all duration-300 outline-none focus:ring-2 focus:ring-primary/20 ${
            icon ? 'pl-11' : 'pl-4'
          } ${
            error ? 'border-danger focus:border-danger' : 'border-border focus:border-primary'
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
      </div>

      {/* Accessible Error Message */}
      {error && (
        <p id={errorId} aria-live="polite" className="mt-2 text-xs font-bold text-danger flex items-center gap-1">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {error}
        </p>
      )}
    </div>
  );
};

export default Input;