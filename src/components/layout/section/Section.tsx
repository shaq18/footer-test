import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ className, ...props }: SectionProps) => {
  return <section className={clsx('py-6', 't-sm:py-10', className)} {...props} />;
});

export default Section;
