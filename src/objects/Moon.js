import * as THREE from 'three';
import colorMap from '../images/moon/moon.jpg';
import normalMap from '../images/moon/normal.jpg';
/**
 * Returns a Moon-like sphere mesh with customizable options
 * @param {Object} options
 * @param {number} options.radius - Sphere radius (default: 3)
 * @param {number} options.widthSegments - Sphere width segments (default: 256)
 * @param {number} options.heightSegments - Sphere height segments (default: 256)
 * @param {string} options.colorMapURL - Path to color map image (default: colorMap)
 * @param {string} options.normalMapURL - Path to normal map image (default: normalMap)
 * @param {number} options.oblateness - Degree of oblateness (default: 0.0012)
 * @param {number} options.roughness - Material roughness (default: 1.0)
 * @param {number} options.metalness - Material metalness (default: 0.0)
 * @param {number} options.reflectivity - Material reflectivity (default: 0.05)
 * @param {number} options.clearcoat - Material clearcoat (default: 0.0)
 * @param {number} options.aoMapIntensity - Ambient occlusion map intensity (default: 1.2)
 * @param {number} options.lightMapIntensity - Light map intensity (default: 1.0)
 * @param {number} options.envMapIntensity - Environment map intensity (default: 0.05)
 * @param {number} options.bumpScale - Bump scale (default: 0.2)
 * @param {number} options.normalScale - Normal scale (default: 3.05)
 * @param {number} options.flatShading - Flat shading (default: false)
 * @param {number} options.transparent - Transparency (default: false)
 * @param {number} options.side - Material side (default: THREE.FrontSide)
 * @param {THREE.Color} options.color - Base color (default: new THREE.Color(0x707070))
 * @param {number} options.initialRotation - Initial rotation of the sphere (default: -1 * Math.PI / 2)
 * @returns {THREE.Mesh} - Sphere mesh
 */
function createMoon({
    radius = 3,
    widthSegments = 256,
    heightSegments = 256,
    colorMapURL = colorMap,
    normalMapURL = normalMap,
    oblateness = 0.0012,
    roughness = 1.0,
    metalness = 0.0,
    reflectivity = 0.05,
    clearcoat = 0.0,
    aoMapIntensity = 1.2,
    lightMapIntensity = 1.0,
    envMapIntensity = 0.05,
    bumpScale = 0.2,
    normalScale = 3.05,
    flatShading = false,
    transparent = false,
    side = THREE.FrontSide,
    color = new THREE.Color(0x707070),
    initialRotation = -1 * Math.PI / 2,
} = {}) {

    try {
        // Load texture
        const colorTexture = new THREE.TextureLoader().load(colorMapURL);
        const normalTexture = new THREE.TextureLoader().load(normalMapURL);

        colorTexture.mapping = THREE.EquirectangularReflectionMapping;
        normalTexture.mapping = THREE.EquirectangularReflectionMapping;

        colorTexture.minFilter = THREE.LinearFilter;
        colorTexture.magFilter = THREE.LinearFilter;
        normalTexture.minFilter = THREE.LinearMipMapLinearFilter;
        normalTexture.magFilter = THREE.LinearFilter;

        // Create material using texture
        const moonMaterial = new THREE.MeshPhysicalMaterial({
            map: colorTexture,
            normalMap: normalTexture,
            normalScale: new THREE.Vector2(normalScale, normalScale),
            roughness: roughness,
            metalness: metalness,
            reflectivity: reflectivity,
            clearcoat: clearcoat,
            color: color,

            aoMapIntensity: aoMapIntensity,
            lightMapIntensity: lightMapIntensity,
            envMapIntensity: envMapIntensity,

            side: side,
            transparent: transparent,
            flatShading: flatShading,

            bumpMap: normalTexture,
            bumpScale: bumpScale,
        });

        const moonGeometry = new THREE.SphereGeometry(
            radius,
            widthSegments,
            heightSegments,
            0,
            Math.PI * 2,
            0,
            Math.PI
        );

        moonGeometry.scale(1, 1 - oblateness, 1);

        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.rotation.y = initialRotation;

        return moon;

    } catch (e) {
        console.error("Error in createMoon: ", e);
    }
}

export { createMoon };