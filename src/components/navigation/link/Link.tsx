import React, { forwardRef, ReactNode } from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  variant?: 'footer' | 'header';
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant, ...props }, ref) => {
    return <a href={href} {...props} ref={ref} />;
  }
);

export default Link;
