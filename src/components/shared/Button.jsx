import React from "react";

const Button = ({
  children,
  variant = "filled",
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    " py-3 px-6 rounded-full text-lg font-bold transition-all duration-200 focus:outline-none font-raleway";

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
      hover:before:opacity-90
      [&>span]:relative
      [&>span]:z-10
    `,
    outlined: `
      bg-transparent 
      border-2 
      border-[#E4B40D] 
      text-[#E4B40D] 
      hover:bg-[#E4B40D]/10
    `,
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

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
      {variant === "filled" ? <span>{children}</span> : children}
    </button>
  );
};

export default Button;
