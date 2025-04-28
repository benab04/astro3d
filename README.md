# 🌍 astro3d

**Create realistic 3D spheres of planets, moons, and satellites — without reinventing the rocket.**

This package lets you easily generate customizable 3D mesh spheres with high-quality textures for use in any `three.js` scene. Whether you're building an educational planetarium, simulating satellite orbits, or just want a cool spinning moon on your homepage — you don't need to write boilerplate material and texture code. Just plug it in and let it orbit.

---

## 🚀 Features

- One-liner setup for textured 3D planetary bodies and satellites
- Fully customizable geometry and material parameters
- High-quality default **color** and **normal maps**, with options to customize
- Orbital simulation capabilities
- Designed for use with **Three.js**

---

## 📦 Installation

```bash
npm install astro3d
# or
yarn add astro3d
```

---

## 🔧 Usage

### Creating a Moon

```js
import * as THREE from "three";
import { createMoon } from "astro3d";

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

### Adding a Satellite

```js
import { createSatellite } from "astro3d";

// Create a satellite
const satellite = createSatellite({
  satelliteScale: 0.2,
  lookAtTarget: [0, 0, 0], // Make it face toward the center
});

// Create an orbit path for the satellite
const orbitRadius = 7;
const satelliteOrbit = new THREE.Object3D();
scene.add(satelliteOrbit);

// Position the satellite in its orbit
satellite.position.set(orbitRadius, 0, 0);
satelliteOrbit.add(satellite);

// Animate the orbit
function animate() {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.005;
  satelliteOrbit.rotation.y += 0.01; // Rotate the satellite around the moon
  renderer.render(scene, camera);
}
```

---

## 🛠️ Parameters

### Moon Parameters

Here's the full list of options you can pass to `createMoon`:

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

### Satellite Parameters

Here's the full list of options for `createSatellite`:

| Parameter            | Type                   | Default                     | Description                              |
| -------------------- | ---------------------- | --------------------------- | ---------------------------------------- |
| `satelliteScale`     | `number`               | `0.7`                       | Overall scale factor for satellite       |
| `satelliteWidth`     | `number`               | `0.04`                      | Width of satellite body                  |
| `satelliteHeight`    | `number`               | `0.04`                      | Height of satellite body                 |
| `satelliteDepth`     | `number`               | `0.04`                      | Depth of satellite body                  |
| `wingWidth`          | `number`               | `0.08`                      | Width of solar panels                    |
| `wingHeight`         | `number`               | `0.02`                      | Height of solar panels                   |
| `wingDepth`          | `number`               | `0.002`                     | Depth of solar panels                    |
| `wingOffset`         | `number`               | `0.06`                      | Distance of wings from center            |
| `satelliteMapURL`    | `string`               | `satelliteMap`              | Path to satellite texture                |
| `solarPanelMapURL`   | `string`               | `solarPanelMap`             | Path to solar panel texture              |
| `satelliteRoughness` | `number`               | `0.5`                       | Satellite material roughness             |
| `satelliteMetalness` | `number`               | `0.8`                       | Satellite material metalness             |
| `panelRoughness`     | `number`               | `0.2`                       | Solar panel roughness                    |
| `panelMetalness`     | `number`               | `0.5`                       | Solar panel metalness                    |
| `satelliteColor`     | `THREE.Color`          | `new THREE.Color(0xFFFFFF)` | Base color for satellite                 |
| `panelColor`         | `THREE.Color`          | `new THREE.Color(0x2244AA)` | Base color for panels                    |
| `lookAtTarget`       | `Array\|THREE.Vector3` | `[0, 0, 0]`                 | Point the satellite toward this position |

---

## 🖼️ Built-in Textures

Each celestial object function like `createMoon` and `createSatellite` comes with its own built-in textures, no need to import or configure separately.

---

## 🌌 Credits

Textures used for color and normal maps are courtesy of **[NASA](https://visibleearth.nasa.gov/)**, who generously provide high-resolution planetary data to the public.

---

## 🚧 Current Status

Currently, the package includes:

- Moon
- Satellite with solar panels
- Earth
- Jupiter

Contributions to add more celestial bodies (like Earth, Mars, Jupiter...) are very welcome!

---

## 🚀 Examples

### Create a Moon with Orbiting Satellite

```js
import * as THREE from "three";
import { createMoon, createSatellite } from "astro3d";

// Standard Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(1, 0, 1).normalize();
scene.add(ambientLight);
scene.add(directionalLight);

// Create moon
const moon = createMoon({ radius: 3 });
scene.add(moon);

// Create satellite and orbit
const satellite = createSatellite({
  satelliteScale: 0.2,
  satelliteColor: new THREE.Color(0xcccccc),
  panelColor: new THREE.Color(0x2244ff),
});

// Create orbit system
const orbitRadius = 7;
const satelliteOrbit = new THREE.Object3D();
scene.add(satelliteOrbit);
satellite.position.set(orbitRadius, 0, 0);
satelliteOrbit.add(satellite);

// Add visual orbit path (optional)
const orbitPath = new THREE.Mesh(
  new THREE.RingGeometry(orbitRadius - 0.03, orbitRadius + 0.03, 64),
  new THREE.MeshBasicMaterial({
    color: 0x3366ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.3,
  })
);
orbitPath.rotation.x = Math.PI / 2;
scene.add(orbitPath);

// Set camera position
camera.position.z = 15;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.001;
  satelliteOrbit.rotation.y += 0.005;
  satellite.rotation.y = -satelliteOrbit.rotation.y;
  renderer.render(scene, camera);
}

animate();
```

---

## 💫 Final Thoughts

This library was built to save you time and boilerplate, and make your planetary and satellite visualizations _look good_. If it helps you, consider giving a star 🌟 or contributing with a pull request.
