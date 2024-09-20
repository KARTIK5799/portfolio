import { useState } from "react";
import Preloader from './components/Preloader/Preloader';

import './App.css'

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
