import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    input: {
        width: "295px",
        height: "53px",
        padding: "16px 24px",
        backgroundColor: "#1C1C4D",
        border: "none",
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "14px",
        color: "#6A6A8B",
        lineHeight: "21px",
    }
});

const Input = ({ ...props }) => {
  const classes = useStyles();
  return (
    <input
      className={classes.input}
      onChange={props.onChange}
      onFocus={props.onFocus}
      {...props}
    />
  );
};

export default Input;
