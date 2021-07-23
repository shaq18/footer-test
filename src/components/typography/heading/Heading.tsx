import React, { forwardRef } from 'react';

export interface HeadingProps {
  className?: string;
  tagName?: keyof JSX.IntrinsicElements;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, tagName, ...props }) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return <Tag {...props} />;
});

export default Heading;
