import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contained: {
    backgroundColor: "#4838D1",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  transparent: {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
});

function Button({ variant, children, ...props }) {
  const classes = useStyles();

  return (
    <button
      className={
        variant === "contained" ? classes.contained : classes.transparent
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
