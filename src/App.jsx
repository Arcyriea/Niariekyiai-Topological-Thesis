import './App.css'
import { ModelLoader } from "./assets/ModelLoader"
import { Canvas } from '@react-three/fiber'

const App = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Niariekyiai's Model Portfolio</h1>
      <Canvas>
        <ModelLoader filepath="assets/models/Kantogawa Assault Battlecruiser.glb?url" />
      </Canvas>
    </div>
    </>
  )
}

export default App
