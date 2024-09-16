import { useState } from "react";
import Preloader from './components/Preloader/Preloader';
import Layout from './page/Layout';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {!preloaderComplete ? (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
