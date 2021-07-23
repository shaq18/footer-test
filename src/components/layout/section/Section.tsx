import clsx from 'clsx';
import React from 'react';

interface SectionProps {
  className?: string;
}

const Section = ({ className, ...props }: SectionProps) => {
  return <section className={clsx('p-6', 't-sm:p-10', className)} {...props} />;
};

export default Section;
