import React from 'react';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon: Icon, title, description, action, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'flex flex-col items-center justify-center py-12 px-4 text-center',
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && (
          <div className="mb-4 p-3 bg-secondary/5 rounded-full">
            <Icon className="h-8 w-8 text-secondary/40" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-secondary mb-2">{title}</h3>
        {description && (
          <p className="text-secondary/60 mb-6 max-w-sm">{description}</p>
        )}
        {action && (
          <Button onClick={action.onClick} variant="primary">
            {action.label}
          </Button>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;

