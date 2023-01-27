import { createUseStyles } from "react-jss";
import Badge from "../../BadgeComponent/Badge";
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
    margin: "8px 0px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#BBB1FA",
    wordWrap: "break-word",
  },

  controls: {
    display: "flex",
    padding: "8px 0",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
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
      <div className={classes.controls}>
        <Button
          variant="contained"
          style={{
            margin: "6px 0",
            gap: "12px",
            width: "295px",
            height: "56px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Personalize Your Account
        </Button>
       
        <Button
          variant="transparent"
          style={{
            margin: "6px 0",
            gap: "12px",
            width: "295px",
            height: "56px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            border: "1px solid #FFFFFF",
          }}
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
