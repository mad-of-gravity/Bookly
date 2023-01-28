import { createUseStyles } from "react-jss";
import Button from "../../ButtonComponent/Button";

const useStyles = createUseStyles({
  pageContainer: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  img: {
    width: "14rem",
    height: "14rem",
  },

  heading1: {
    margin: "20px 0 10px 0",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#F5F5FA",
   },

   paragraph: { 
    margin: "0 0 20px 0",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#F5F5FA",
   },

   finish: {
    width: "295px", 
    height: "56px",
    border: "none",
    borderRadius: "8px",
    padding: "16px 32px",
    color: "#FFFFFF",
    backgroundColor: "#4838D1",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
   },
});


const FinishPersonalizationScreen = () => {
    const classes = useStyles();
    
  return (
    <div className={classes.pageContainer}>
      <img className={classes.img} src="happy-people.png" alt="Illustration" />
      <h1 className={classes.heading1}>You are ready to go!</h1>
      <p className={classes.paragraph}>Congratulation, any interesting topics will be shortly in your hands.</p>
      <Button className={classes.finish}>Finish</Button>
    </div>
  );
};

export default FinishPersonalizationScreen;
