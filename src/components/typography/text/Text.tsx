import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  variant?: 'body' | 'footer';
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'body', ...props }, ref) => {
    return <p ref={ref} className={clsx(className)} {...props} />;
  }
);

export default Text;
