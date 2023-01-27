import "./App.css";
import OnBoarding from "./components/Pages/OnBoardingPage/OnBoarding";
import Personalization from "./components/Pages/PersonalizationPage/Personalization";
import Welcome from "./components/Pages/WelcomePage/Wecome";

const elements = [
  {
    title: "Tittle One",
    textContent: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
    imgSrc: "books.png",
  },
  {
    title: "Title Two",
    textContent: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
    imgSrc: "meditating-woman.png",
  },
  {
    title: "Title Three",
    textContent: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
    imgSrc: "loudspeaker.png",
  },
];

function App() {
  return (
    <>
      <div className="header">
        <img
          className="left-ellipse"
          src="ellipse_16_stroke.png"
          alt="header left ellipse"
        />
        <img
          className="right-ellipse"
          src="ellipse_17.png"
          alt="header right ellipse"
        />
      </div>
      <Personalization />
      
      
    </>
  );
}

export default App;
