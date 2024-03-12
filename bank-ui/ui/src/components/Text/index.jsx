import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  s: "text-[13px] font-normal",
  "2xl": "text-lg font-medium",
  "3xl": "text-xl font-normal",
  "4xl": "text-[22px] font-normal",
  xl: "text-base font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
