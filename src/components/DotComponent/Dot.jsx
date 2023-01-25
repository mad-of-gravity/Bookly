const Dot = ({ diameter, color, ...props }) => {
  return (
    <span
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      style={{
        margin: props.margin ? props.margin : "2px",
        padding: props.padding ? props.padding : "0",
        width: diameter,
        height: diameter,
        backgroundColor: color,
        border: "none",
        borderRadius: "50%",
        display: "inline-block",
        cursor: "pointer",
      }}
    ></span>
  );
};

export default Dot;
