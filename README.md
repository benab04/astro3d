# 🌍 celestial-bodies

**Create realistic 3D spheres of planets, moons, or any celestial body — without reinventing the rocket.**

This package lets you easily generate customizable 3D mesh spheres with high-quality textures for use in any `three.js` scene. Whether you're building an educational planetarium or just want a cool spinning moon on your homepage — you don't need to write boilerplate material and texture code. Just plug it in and let it orbit.

---

## 🚀 Features

- One-liner setup for textured 3D planetary bodies
- Fully customizable geometry and material parameters
- High-quality default **color** and **normal maps**, with options to customize
- Designed for use with **Three.js**

---

## 📦 Installation

```bash
npm install celestial-bodies
# or
yarn add celestial-bodies
```

---

## 🔧 Usage

```js
import * as THREE from "three";
import { createMoon } from "celestial-bodies";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const moon = createMoon({
  radius: 5,
  widthSegments: 64,
  heightSegments: 64,
  roughness: 0.8,
  metalness: 0.2,
});

scene.add(moon);
camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();
```

---

## 🛠️ Parameters

Here’s the full list of options you can pass to `createMoonSphere`, `createEarthSphere`, etc:

| Parameter           | Type          | Default                     | Description                             |
| ------------------- | ------------- | --------------------------- | --------------------------------------- |
| `radius`            | `number`      | `3`                         | Radius of the sphere                    |
| `widthSegments`     | `number`      | `256`                       | Number of horizontal segments           |
| `heightSegments`    | `number`      | `256`                       | Number of vertical segments             |
| `colorMapURL`       | `string`      | `colorMap`                  | Path to the diffuse texture (color)     |
| `normalMapURL`      | `string`      | `normalMap`                 | Path to the normal map                  |
| `oblateness`        | `number`      | `0.0012`                    | Slight squashing for realism            |
| `roughness`         | `number`      | `1.0`                       | How rough the surface appears           |
| `metalness`         | `number`      | `0.0`                       | How metallic the surface appears        |
| `reflectivity`      | `number`      | `0.05`                      | Reflectiveness of the material          |
| `clearcoat`         | `number`      | `0.0`                       | Clearcoat layer for extra gloss         |
| `aoMapIntensity`    | `number`      | `1.2`                       | Intensity of ambient occlusion          |
| `lightMapIntensity` | `number`      | `1.0`                       | Intensity of baked lighting             |
| `envMapIntensity`   | `number`      | `0.05`                      | Strength of environment reflection      |
| `bumpScale`         | `number`      | `0.2`                       | Scale of bump mapping                   |
| `normalScale`       | `number`      | `3.05`                      | Intensity of normal mapping             |
| `flatShading`       | `boolean`     | `false`                     | Enable flat shading                     |
| `transparent`       | `boolean`     | `false`                     | Enable transparency                     |
| `side`              | `THREE.Side`  | `THREE.FrontSide`           | Which side(s) of the material to render |
| `color`             | `THREE.Color` | `new THREE.Color(0x707070)` | Base material color                     |
| `initialRotation`   | `number`      | `-Math.PI / 2`              | Initial Y rotation of the sphere        |

---

## 🖼️ Built-in Textures

Each celestial object function like `createMoon` comes with its own built-in textures, no need to import or configure separately.

---

## 🌌 Credits

Textures used for color and normal maps are courtesy of **[NASA](https://visibleearth.nasa.gov/)**, who generously provide high-resolution planetary data to the public.

---

## 🚧 Current Status

Currently, only the Moon has been added. Contributions to add more celestial bodies (like Earth, Mars, Jupiter...) are very welcome!

---

## 💫 Final Thoughts

This library was built to save you time and boilerplate, and make your planetary visualizations _look good_. If it helps you, consider giving a star 🌟 or contributing with a pull request.
