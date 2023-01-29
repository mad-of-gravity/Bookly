import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinishPersonalizationScreen from "./components/Pages/FinishPersonalizationPage/FinishPersonalizationScreen";
import OnBoarding from "./components/Pages/OnBoardingPage/OnBoarding";
import Personalization from "./components/Pages/PersonalizationPage/Personalization";
import Welcome from "./components/Pages/WelcomePage/Wecome";
import Library from "./components/Pages/LibraryPage/Library";
import "./App.css";
import PageHeader from "./components/PageHeaderComponent/PageHeader";

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
      <BrowserRouter>
        <PageHeader />
      <Routes>
        <Route exact path="/" element={<OnBoarding pageElements={elements}/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/personalization" element={<Personalization/>} />
        <Route path="/ready" element={<FinishPersonalizationScreen/>} />
        <Route path="/library" element={<Library/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
