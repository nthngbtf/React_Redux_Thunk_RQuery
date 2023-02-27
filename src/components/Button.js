import React from "react";
import classNames from "classnames";
import { GoSync } from "react-icons/go";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  inlineBtn,
  ...rest //ading the props like on the button
}) => {
  //   console.log(rest);
  //  "flex items-center px-3 py-1.5 border h-8  ",
  const classes = classNames(
    "flex items items-center",
    {
      "opacity-80": loading,
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-black": outline,
      "text-blue-500 ": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500 ": success && outline,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
      "bg-transparent cursor-pointer font-sans  uppercase outline-0 border-none p-2 text-colorBtnPrimary group text-xs md:text-base":
        inlineBtn,
    },
    rest.className
  );

  //  before:content-[''] group before:inline-block before:h-px before:mr-2.5 transition-[ all .42s cubic-bezier(.25,.8,.25,1)] before:w-0  hover:before:bg-colorBtnPrimary hover:before:w-7
  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin " /> : children}
    </button>
  );
};

Button.propTypes = {
  checkVariation: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    inlineBtn,
    rounded,
    outline,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!inlineBtn) +
      Number(!!rounded) +
      Number(!!outline);

    if (count > 1) {
      return new Error(
        "Only one of primary,secondary,success, warning,danger can be true"
      );
    }
  },
};
export default Button;
