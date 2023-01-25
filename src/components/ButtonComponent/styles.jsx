//The function returns an object specifying the style of the contained button
export const getContainedButtonStyle = ({ color, display, ...props }) => {
  const defaultColors = {
    primary: "#4838D1",
    transparent: "transparent",
  };

  return {
    margin: props.margin ? props.margin : "0",
    padding: props.padding ? props.padding : "16px 32px",
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
    opacity: props.opacity ? props.opacity : "1",
    cursor: "pointer",
  };
};

//The function returns a Text button style object
export const getTextButtonStyle = ({ display, ...props }) => {
  return {
    margin: props.margin ? props.margin : "0",
    padding: props.padding ? props.padding : "16px 32px",
    border: "none",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    display: display,
    textAlign: "center",
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    width: display === "block" ? "100%" : props.width,
    opacity: props.opacity ? props.opacity : "1",
    cursor: "pointer",
  };
};
