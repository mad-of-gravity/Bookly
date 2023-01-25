export const getContainedButtonStyle = ({ color, display, ...props }) => {
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
    border: props.border ? props.border : "none",
    borderRadius: "8px",
    display: display,
    textAlign: "center",
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    width: display === "block" ? "100%" : props.width,
    opacity: props.isHover ? "0.7" : "1",
  };
};


export const getTextButtonStyle = ({ display, ...props }) => {

    return {
      padding: "16px 32px",
      color: "#FFFFFF",
      backgroundColor: "transparent",
      display: display,
      textAlign: "center",
      fontWeight: props.fontWeight ? props.fontWeight : "normal",
      width: display === "block" ? "100%" : props.width,
      opacity: props.isHover ? "0.7" : "1",
    };
  };
