import React from "react";
import clsx from "clsx";
type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};
const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "Section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px=4 py-10 md:px-5 md:py-14 lg:py-14")}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-screen-2xl">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
