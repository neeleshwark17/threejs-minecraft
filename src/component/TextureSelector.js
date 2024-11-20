import React, { useEffect, useState } from "react";
import { useKeyBoard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg,
  yellowBrickImg,
} from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: logImg,
  log: woodImg,
  yellowBrick: yellowBrickImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  // const [activeTexture, setTexture] = useStore((state) => [
  //   state?.texture,
  //   state?.setTexture,
  // ]);
  const activeTexture = useStore((state) => state.texture);
  const setTexture = useStore((state) => state.setTexture);
  
  // console.log("_______>", activeTexture);
  const { dirt, grass, glass, wood, log, yellowBrick } = useKeyBoard();

  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log, yellowBrick };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log, yellowBrick]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 200);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);
  return (
    visible && (
      <div className="absolute centered texture-select">
        {Object.entries(images).map(([k, src]) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            key={k}
            src={src}
            className={`${k === activeTexture && "active"}`}
          />
        ))}
      </div>
    )
  );
};
