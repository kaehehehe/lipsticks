import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const colorPalette = ["#f18f8f", "#ee9e9e", "#ff8fab", "#ef7979"];

export default function Model({ position }) {
  const { scene } = useGLTF("lipstick.glb");
  const [colorIndex, setColorIndex] = useState(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (scene.children[2]) {
      scene.children[2].material.color.set(colorPalette[colorIndex]);
    }
  }, [scene, colorIndex]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 1000;

    if (time - lastTimeRef.current > 1000) {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorPalette.length);
      lastTimeRef.current = time;
    }
  });

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={[10, 10, 10]}
      rotation={[0, Math.PI, 0]}
    />
  );
}
