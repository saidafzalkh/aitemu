import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

interface searchProps extends HTMLAttributes<HTMLButtonElement> {}

const Search = (props: searchProps): ReactElement => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default Search;
