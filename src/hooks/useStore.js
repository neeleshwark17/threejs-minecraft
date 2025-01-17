import { nanoid } from "nanoid";
import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set, get) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") || [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    console.log("setTexture", texture);
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    const cubes = get().cubes; // Use `get()` to read state
    console.log("SAVE WORLD", cubes);
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
