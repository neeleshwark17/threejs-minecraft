import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
  yellowBrickImg,
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);
const yellowBrickTexture = new TextureLoader().load(yellowBrickImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
yellowBrickTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  logTexture,
  groundTexture,
  yellowBrickTexture,
};
