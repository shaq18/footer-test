import React, { forwardRef, ReactNode } from 'react';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ ...props }, ref) => {
  return <div className="container" ref={ref} {...props} />;
});

export default Container;
