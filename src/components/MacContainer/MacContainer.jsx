import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const MacContainer = () => {
    let model= useGLTF("src/assets/mac.glb")
    let meshes={};
    model.scene.traverse((e)=>{
        meshes[e.name]=e;
    });

    meshes.screen.rotation.x=THREE.MathUtils.degToRad(180);
    let data = useScroll();

    useFrame((state,delta)=>{
        console.log(data.offset)
        meshes.screen.rotation.x=THREE.MathUtils.degToRad(180-data.offset*90);
    })
  return (
    <group position={[0,-11,20]} scale={[1.3, 1.3, 1.3]}>
        <primitive object={model.scene}/>
    </group>
  )

  
}

export default MacContainer
