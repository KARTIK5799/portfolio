import { Canvas } from '@react-three/fiber';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import './LandingPage.css';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from '../MacContainer/MacContainer';

const LandingPage = () => {
  return (
    <div className="landing-page overflow-y-scroll relative h-full w-full text-center min-h-screen flex flex-col justify-center items-center">
 
      <WelcomeComponent />
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr" />
        <ScrollControls pages={2}>
          <MacContainer />
        </ScrollControls>
      </Canvas>


    </div>
  );
};

export default LandingPage;
