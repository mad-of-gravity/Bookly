import { useState } from "react";
import { getContainedButtonStyle, getTextButtonStyle } from "./styles";

export const Button = ({
  color = "primary",
  variant = "contained",
  display = "inline-block",
  children,
  ...props
}) => {
  //This will contain the hover status value
  const [isHover, setIsHover] = useState(false);
  const variants = {
    CONTAINED: "contained",
    TEXT: "text",
  };

  //Hover handlers
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const styledButton =
    variant === variants.CONTAINED ? (
      <button
        style={getContainedButtonStyle({ color, display, isHover, ...props })}
        onClick={props.onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    ) : (
      <button
        style={getTextButtonStyle({ display, isHover, ...props })}
        onClick={props.onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );

  return styledButton;
};
