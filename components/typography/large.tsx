import { HTMLAttributes, ReactElement } from 'react';

import { cn } from '@/lib/shadcn';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Large = (props: PProps): ReactElement => {
  return (
    <p
      {...props}
      className={cn(
        "text-lg font-semibold [&:not(:first-child)]:mt-6",
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export default Large;
