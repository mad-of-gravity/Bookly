//The function returns an object specifying the style of the contained button
export const getContainedButtonStyle = ({
  color,
  display,
  ...props
}) => {
  const defaultColors = {
    primary: "#4838D1",
    transparent: "transparent",
  };

  return {
    width: props.width ? props.width : "64px",
    height: props.height ? props.height : "24px",
    width: display === "block" ? "100%" : props.width,
    height: props.height ? props.height : "24px",
    color: "#FFFFFF",
    backgroundColor: !defaultColors.hasOwnProperty(color) //If the object does not contain color property -> return color
      ? color
      : defaultColors[color],
    border: props.border ? props.border : "none",
    borderRadius: "8px",
    display: display,
    textAlign: "center",
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    opacity: props.opacity ? props.opacity : "1",
    cursor: "pointer",
  };
};

//The function returns a Text button style object
export const getTextButtonStyle = ({
  display,
  padding,
  ...props
}) => {
  return {
    width: props.width ? props.width : "64px",
    height: props.height ? props.height : "24px",
    width: display === "block" ? "100%" : props.width,
    height: props.height ? props.height : "24px",
    border: "none",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    display: display,
    textAlign: "center",
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    opacity: props.opacity ? props.opacity : "1",
    cursor: "pointer",
  };
};
