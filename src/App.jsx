import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Color } from "three";
import Model from "./components/Model";
import "./styles.css";

const spacing = 70;
const modelCount = 10;

export default function App() {
  return (
    <Canvas camera={{ fov: 60, position: [400, -200, 0], near: 1, far: 1000 }}>
      <color attach="background" args={[new Color("#dbd7d2")]} />

      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={100}
        maxDistance={500}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      {Array.from({ length: modelCount }).map((_, i) => (
        <Model
          key={i}
          position={[0, 0, (i - (modelCount - 1) / 2) * spacing]}
        />
      ))}
    </Canvas>
  );
}
