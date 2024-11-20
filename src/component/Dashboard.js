import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Player } from "../component/Player";
import { Ground } from "../component/Ground";
import { FPV } from "../component/FPV";
import { Cubes } from "../component/Cubes";
import { TextureSelector } from "../component/TextureSelector";
import { Menu } from "../component/Menu";

const Dashboard = () => {
  return (
    <div
      style={{
        background: "red",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </div>
  );
};

export default Dashboard;
