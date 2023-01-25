import { useState } from "react";

export const Button = ({
  color = "primary",
  variant = "contained",
  display = "inline-block",
  children,
  ...props
}) => {
    //This will contain the hover status value
    const [isHover, setIsHover] = useState(false);

    //Hover handlers
    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }


  const getContainedButtonStyle = ({ color, display, ...props }) => {
    const defaultColors = {
      primary: "#4838D1",
      transparent: "transparent",
    };

    return {
      padding: "16px 32px",
      color: "#FFFFFF",
      backgroundColor: !defaultColors.hasOwnProperty(color) //If the object does not contain color property -> return color
        ? color
        : defaultColors[color],
      border: "none",
      borderRadius: "8px",
      display: display,
      textAlign: "center",
      fontWeight: props.fontWeight ? props.fontWeight : "normal",
      width: display === "block" ? "100%" : props.width,
      opacity: isHover ? "0.7" : "1",
    };
  };

  return (
    <button
      style={getContainedButtonStyle({ color, display, ...props })}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
