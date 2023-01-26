import { createUseStyles } from "react-jss";
import { useState } from "react";
import Button from "../../ButtonComponent/Button";
import Dot from "../../DotComponent/Dot";

//The page styles used
const useStyles = createUseStyles({
  pageContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  img: {
    width: "10rem",
    height: "10rem",
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
    fontWeight: "400",
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "21px",
    color: "#ffffff",
    wordWrap: "break-word",
  },

  dots: {
    margin: "18px 0",
  },
});

const OnBoarding = ({pageElements}) => {
  //#2E2E5D will be the initial color of the dots
  const [firstDotColor, setFirstDotColor] = useState("#2E2E5D");
  const [secondDotColor, setSecondDotColor] = useState("#2E2E5D");
  const [thirdDotColor, setThirdDotColor] = useState("#2E2E5D");

  //The states for the page content are defined here
  const [title, setTitle] = useState(pageElements[0].title);
  const [textContent, setTextContent] = useState(pageElements[0].textContent);
  const [imgSource, setImgSource] = useState(pageElements[0].imgSrc);
  

  //Event handlers goes here
  //..........................//
  //When the second dot is clicked
  const handleFirstDotClick = () => { 
    setFirstDotColor("#4838D1");
    setSecondDotColor("#2E2E5D");
    setThirdDotColor("#2E2E5D");

    setTitle(pageElements[0].title);
    setTextContent(pageElements[0].textContent);
    setImgSource(pageElements[0].imgSrc);
  };

  //When the second dot is clicked
  const handleSecondDotClick = () => { 
    setFirstDotColor("##2E2E5D");
    setSecondDotColor("#4838D1");
    setThirdDotColor("#2E2E5D");

    setTitle(pageElements[1].title);
    setTextContent(pageElements[1].textContent);
    setImgSource(pageElements[1].imgSrc);
  }; 

  //When the third dot is clicked
  const handleThirdDotClick = () => { 
    setFirstDotColor("#2E2E5D");
    setSecondDotColor("#2E2E5D");
    setThirdDotColor("#4838D1");

    setTitle(pageElements[2].title);
    setTextContent(pageElements[2].textContent);
    setImgSource(pageElements[2].imgSrc);
  }; 

  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <img
        className={classes.img}
        src={imgSource}
        alt="page image"
      />


      {/*This container includes the title and text content of the page.*/}
      <div className={classes.textContainer}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.textContent}>
          {textContent}
        </p>
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
    </div>
  );
};

export default OnBoarding;
