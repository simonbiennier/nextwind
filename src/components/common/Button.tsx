import { FC, HTMLAttributes } from "react";

import clsxm from "@/lib/clsxm";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={clsxm(
        "flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 p-3 text-base font-medium text-gray-400  hover:bg-gray-900 hover:text-white focus:z-10 focus:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
