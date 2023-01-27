import { createUseStyles } from "react-jss";
import { useState } from "react";
import Dot from "../../DotComponent/Dot";
import Button from "../../ButtonComponent/Button";

//The page styles used
const useStyles = createUseStyles({
  pageContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  img: {
    width: "14rem",
    height: "14rem",
  },

  "@media (max-width: 375px)": {
    img: {
      width: "12rem",
      height: "12rem",
    },
  },

  textContainer: {
    textAlign: "center",
  },

  title: {
    marginTop: "8px",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#fff",
  },

  textContent: {
    marginTop: "8px",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "21px",
    color: "#ffffff",
  },

  dots: {
    margin: "18px 0",
  },

  controls: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const OnBoarding = ({ pageElements }) => {
  //#2E2E5D will be the initial color of the dots except first one
  const [firstDotColor, setFirstDotColor] = useState("#4838D1");
  const [secondDotColor, setSecondDotColor] = useState("#2E2E5D");
  const [thirdDotColor, setThirdDotColor] = useState("#2E2E5D");

  //tracking the current dot
  const [dotIndex, setDotIndex] = useState(0);

  //The states for the page content are defined here
  const [title, setTitle] = useState(pageElements[0].title);
  const [textContent, setTextContent] = useState(pageElements[0].textContent);
  const [imgSource, setImgSource] = useState(pageElements[0].imgSrc);

  //Event handlers goes here
  //..........................//
  //When the second dot is clicked
  const handleFirstDotClick = () => {
    setDotIndex(1);
    setFirstDotColor("#4838D1");
    setSecondDotColor("#2E2E5D");
    setThirdDotColor("#2E2E5D");

    setTitle(pageElements[0].title);
    setTextContent(pageElements[0].textContent);
    setImgSource(pageElements[0].imgSrc);
  };

  //When the second dot is clicked
  const handleSecondDotClick = () => {
    setDotIndex(2);
    setFirstDotColor("#2E2E5D");
    setSecondDotColor("#4838D1");
    setThirdDotColor("#2E2E5D");

    setTitle(pageElements[1].title);
    setTextContent(pageElements[1].textContent);
    setImgSource(pageElements[1].imgSrc);
  };

  //When the third dot is clicked
  const handleThirdDotClick = () => {
    setDotIndex(0);
    setFirstDotColor("#2E2E5D");
    setSecondDotColor("#2E2E5D");
    setThirdDotColor("#4838D1");

    setTitle(pageElements[2].title);
    setTextContent(pageElements[2].textContent);
    setImgSource(pageElements[2].imgSrc);
  };

  // //When the skip button is clicked
  // const handleSkipClick = () => {
  //   setDotIndex(0);
  // };

  //When the next button is clicked
  const handleNextClick = () => {
    if (dotIndex === 0) {
      setDotIndex(dotIndex + 1);
      handleFirstDotClick();
    } else if (dotIndex === 1) {
      setDotIndex(dotIndex + 1);
      handleSecondDotClick();
    } else {
      setDotIndex(0);
      handleThirdDotClick();
    }
  };

  //..........................//

  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <img className={classes.img} src={imgSource} alt="Illustration" />

      {/*This container includes the title and text content of the page.*/}
      <div className={classes.textContainer}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.textContent}>{textContent}</p>
      </div>

      {/*Dots that change the title and content of the page*/}
      <div className={classes.dots}>
        <Dot
          diameter="12px"
          margin="0 4px"
          color={firstDotColor}
          onClick={handleFirstDotClick}
        />
        <Dot
          diameter="12px"
          margin="0 4px"
          color={secondDotColor}
          onClick={handleSecondDotClick}
        />
        <Dot
          diameter="12px"
          margin="0 4px"
          color={thirdDotColor}
          onClick={handleThirdDotClick}
        />
      </div>
      <div className={classes.controls}>
        <Button
          variant="transparent"
          onClick={handleNextClick}
          style={{
            width: "140px",
            height: "56px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Skip
        </Button>
        <Button
          variant="contained"
          onClick={handleNextClick}
          style={{
            width: "140px",
            height: "56px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
