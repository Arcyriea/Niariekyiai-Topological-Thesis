import { useLoader } from '@react-three/fiber';
import './App.css'

const ModelLoader = (filePath) => {
    const gltf = useLoader(GLTFLoader, filePath);
  
    if (gltf) {
      return (
        <primitive object={gltf.scene} />
      );
    }
  
    return (
      <mesh ref={meshRef} scale={[10, 10, 10]} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    );
  };

  export default ModelLoader