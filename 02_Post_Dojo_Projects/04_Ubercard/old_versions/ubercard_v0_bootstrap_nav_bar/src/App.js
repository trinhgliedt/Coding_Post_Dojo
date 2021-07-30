// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
// import {
//   ubercardFirestore,
//   ubercardDatabase,
//   ubercardAuth,
//   ubercardFunction,
//   ubercardStorage,
//   timestamp,
// } from './config/firebaseConfig';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Ubercard v3</h1>
      </header>
    </div>
  );
}

export default App;
