import { createUseStyles } from "react-jss";
import Button from "../../ButtonComponent/Button";
import Dot from "../../DotComponent/Dot";


const useStyles = createUseStyles({
  pageContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  dots: {
    margin: "18px 0",
  }
});

const OnBoarding = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <img src="meditating-woman.png" alt="Meditating women" width="30%" height="30%"/>
      <div className={classes.dots}>
        <Dot diameter="12px" margin="0 4px" color="#4838D1"/>
        <Dot diameter="12px" margin="0 4px" color="#2E2E5D"/>
        <Dot diameter="12px" margin="0 4px" color="#2E2E5D"/>
      </div>
    </div>
  );
};

export default OnBoarding;