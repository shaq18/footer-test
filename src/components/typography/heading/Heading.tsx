import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children?: ReactNode;
}

const styles = {
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  h5: 'font-medium uppercase text-heading-5',
  h6: '',
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', className, ...props }, ref) => {
    const Tag = as;

    return <Tag className={clsx(styles[as], className)} {...props} ref={ref} />;
  }
);

export default Heading;
