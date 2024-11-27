import React from "react";

const Button = ({
  children,
  variant = "filled",
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    "py-2 px-5 rounded-full text-base font-bold font-raleway " +
    "sm:py-3 sm:px-8 sm:text-lg " +
    "transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ";

  const customStyles = {
    filled: `
      bg-[#E4B40D]
      relative
      overflow-hidden
      before:absolute
      before:inset-0
      before:bg-gradient-to-r
      before:from-[#E4B40D]
      before:to-[#FBD966]
      before:content-['']
      before:opacity-0
      before:transition-opacity
      before:duration-300
      hover:before:opacity-100
      [&>span]:relative
      [&>span]:z-10
      [&>span]:inline-block
      [&>span]:transition-transform
      [&>span]:duration-300
      hover:[&>span]:translate-x-1
    `,
    outlined: `
      relative
      bg-transparent
      border-2
      border-[#E4B40D]
      text-[#E4B40D]
      overflow-hidden
      transition-all
      duration-300
      hover:border-[#FBD966]
      hover:text-[#FBD966]
      hover:bg-[#E4B40D]/10
      hover:shadow-[0_0_15px_rgba(228,180,13,0.3)]
      [&>span]:relative
      [&>span]:z-10
      [&>span]:inline-block
      [&>span]:transition-transform
      [&>span]:duration-300
      hover:[&>span]:translate-x-1
    `,
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100 hover:shadow-none";

  const buttonStyles = `
    ${baseStyles}
    ${customStyles[variant]}
    ${disabled ? disabledStyles : ""}
    ${className}
  `.trim();

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {variant === "filled" ? <span>{children}</span> : <span>{children}</span>}
    </button>
  );
};

export default Button;
