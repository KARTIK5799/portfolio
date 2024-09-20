import { useState } from "react";
import Preloader from './components/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./Layout";

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {!preloaderComplete ? (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      ) : (
   
        <Layout/>
      )}
    </>
  );
}

export default App;
