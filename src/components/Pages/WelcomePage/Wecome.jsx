import { createUseStyles } from "react-jss";
import Button from "../../ButtonComponent/Button";

//The page styles used
const useStyles = createUseStyles({
  pageContainer: {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    flexWrap: "wrap",
  },

  heading1: {
    margin: "8px 0",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#BBB1FA",
  },

  heading2: {
    margin: "8px 0",
    fontWeight: "250",
    fontSize: "48px",
    lineHeight: "57.6px",
    color: "#FFFFFF",
    wordWrap: "break-word",
  },

  paragraph: {
    margin: "8px 0",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#BBB1FA",
    wordWrap: "break-word",
  },
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.heading1}>Welcome !</h1>
      <h2 className={classes.heading2}>Find what you are looking for</h2>
      <p className={classes.paragraph}>
        By personalize your account, we can help you to find what you like.
      </p>
      <Button > Personalize your account</Button>
    </div>
  );
};

export default Welcome;
