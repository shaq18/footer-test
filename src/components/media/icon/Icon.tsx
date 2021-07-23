import clsx from 'clsx';
import React, { forwardRef } from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: 'facebook' | 'instagram' | 'twitter' | 'pinterest';
}

const Icon = forwardRef<HTMLDivElement, IconProps>(({ className, icon, ...props }) => {
  return <div className={clsx(`icon-${icon} flex text-icon`, className)} {...props} />;
});

export default Icon;
