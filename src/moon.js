import { createCelestialBody } from './utils/createCelestialBody';
import * as THREE from 'three';
// const colorMap = new URL("./assets/textures/moon/colorMap.jpg", import.meta.url)
const colorMap = new URL('./assets/textures/moon/colorMap.jpg', import.meta.url).href;

const normalMap = new URL("./assets/textures/moon/normalMap.jpg", import.meta.url).href
/**
 * Creates a realistic 3D Moon object
 */
export const Moon = createCelestialBody({
    radius: 3,
    segments: 256,
    oblateness: 0.0012,
    textures: {
        map: colorMap,
        normalMap: normalMap,
    },
    materialOptions: {
        normalScale: new THREE.Vector2(3.05, 3.05),
        roughness: 1.0,
        metalness: 0.0,
        reflectivity: 0.05,
        clearcoat: 0.0,
        color: new THREE.Color(0x707070),
        aoMapIntensity: 1.2,
        lightMapIntensity: 1.0,
        envMapIntensity: 0.05,
        side: THREE.FrontSide,
        transparent: false,
        flatShading: false,
        bumpScale: 0.2,
    },
    initialRotation: {
        y: -1 * Math.PI / 2
    }
});

// Export functions to work with the moon
export function setupMoonEnvironment(scene) {
    // Add default lighting for moon
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(3.3, -2, 10);
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(pointLight, ambientLight);
}

// Add a helper function to debug the moon's visibility
export function debugMoon(moon, scene) {
    // Add a wireframe to see the geometry
    const wireframe = new THREE.WireframeGeometry(moon.geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.color.set(0x00ff00);
    scene.add(line);

    // Log debug info
    console.log('Moon debugging information:');
    console.log('- Position:', moon.position);
    console.log('- Rotation:', moon.rotation);
    console.log('- Visible:', moon.visible);
    console.log('- Material type:', moon.material.type);

    // Return the wireframe so it can be removed later if needed
    return line;
}