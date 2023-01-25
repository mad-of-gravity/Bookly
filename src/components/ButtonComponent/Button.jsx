import { getContainedButtonStyle, getTextButtonStyle } from "./styles";

const Button = ({
  variant = "contained",
  display = "inline-block",
  color = "primary",
  margin="0",
  children,
  ...props
}) => {

  const variants = {
    CONTAINED: "contained",
    TEXT: "text",
  };

  const styledButton =
    variant === variants.CONTAINED ? (
      <button
        style={getContainedButtonStyle({
          color,
          display,
          margin,
          ...props,
        })}
        onClick={props.onClick}
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
      >
        {children}
      </button>
    ) : (
      <button
        style={getTextButtonStyle({ display, ...props })}
        onClick={props.onClick}
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
      >
        {children}
      </button>
    );

  return styledButton;
};

export default Button;