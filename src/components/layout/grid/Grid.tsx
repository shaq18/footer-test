import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  type?: 'container' | 'item' | 'item-container';
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, type = 'container', ...props }, ref) => {
    return (
      <div
        className={clsx({ grid: type === 'container' || type === 'item-container' }, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Grid;
