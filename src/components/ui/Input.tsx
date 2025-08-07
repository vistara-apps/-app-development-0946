import React from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, success, helperText, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={clsx(
            'input w-full',
            error && 'input-error',
            success && 'input-success',
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || success || helperText) && (
          <div className="text-xs">
            {error && <p className="text-error">{error}</p>}
            {success && <p className="text-success">{success}</p>}
            {helperText && !error && !success && (
              <p className="text-secondary/60">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

