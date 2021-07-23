import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  variant?: 'footer' | 'footer-sub';
}

const styles = {
  variant: {
    footer: 'font-black text-footer lowercase t-sm:font-light t-sm:normal-case',
    'footer-sub': 'text-footer lowercase',
  },
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant = 'footer', ...props }, ref) => {
    return <a href={href} {...props} ref={ref} className={clsx(styles.variant[variant])} />;
  }
);

export default Link;
