import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import AccordionComp from "./components/NavbarComp/AccordionComp";
import CarouselComp from "./components/CarouselComp";
// steps to install bootstrap:
// npm install react-bootstrap@next bootstrap@5.0.2
// In app.js: import 'bootstrap/dist/css/bootstrap.min.css';
// In public/index.html, copy paste in the Browser Global script from https://react-bootstrap.github.io/getting-started/introduction

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <AccordionComp />
      <CarouselComp />
    </div>
  );
}

export default App;
