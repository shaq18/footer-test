import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => {
  return <section className={clsx('py-6', 't-sm:py-10', className)} ref={ref} {...props} />;
});

export default Section;
