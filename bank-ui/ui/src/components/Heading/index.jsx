import React from "react";

const sizes = {
  xl: "text-[28px] font-semibold",
  s: "text-base font-bold",
  md: "text-[17px] font-semibold",
  xs: "text-[15px] font-bold",
  lg: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
