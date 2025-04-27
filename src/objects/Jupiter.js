import * as THREE from 'three';
import colorMap from '../images/jupiter/jupiter2_6k.jpg'
/**
 * Returns a Jupiter-like sphere mesh with customizable options
 * @param {Object} options
 * @param {number} options.radius - Sphere radius (default: 6)
 * @param {number} options.widthSegments - Sphere width segments (default: 256)
 * @param {number} options.heightSegments - Sphere height segments (default: 256)
 * @param {string} options.colorMapURL - Path to color map image (default: colorMap)
 * @param {string} options.normalMapURL - Path to normal map image (default: null)
 * @param {number} options.oblateness - Degree of oblateness (default: 0.065)
 * @param {number} options.roughness - Material roughness (default: 0.8)
 * @param {number} options.metalness - Material metalness (default: 0.0)
 * @param {number} options.reflectivity - Material reflectivity (default: 0.0)
 * @param {number} options.clearcoat - Material clearcoat (default: 0.0)
 * @param {number} options.aoMapIntensity - Ambient occlusion map intensity (default: 1.0)
 * @param {number} options.lightMapIntensity - Light map intensity (default: 1.0)
 * @param {number} options.envMapIntensity - Environment map intensity (default: 0.1)
 * @param {number} options.bumpScale - Bump scale (default: 0.1)
 * @param {number} options.normalScale - Normal scale (default: 2.0)
 * @param {number} options.flatShading - Flat shading (default: false)
 * @param {number} options.transparent - Transparency (default: false)
 * @param {number} options.side - Material side (default: THREE.FrontSide)
 * @param {THREE.Color} options.color - Base color (default: new THREE.Color(0xf0e0c0))
 * @param {number} options.initialRotation - Initial rotation of the sphere (default: 0)
 * @returns {THREE.Mesh} - Sphere mesh
 */
function createJupiter({
    radius = 6,
    widthSegments = 256,
    heightSegments = 256,
    colorMapURL = colorMap,
    normalMapURL = null,
    oblateness = 0.065,
    roughness = 0.8,
    metalness = 0.0,
    reflectivity = 0.0,
    clearcoat = 0.0,
    aoMapIntensity = 1.0,
    lightMapIntensity = 1.0,
    envMapIntensity = 0.1,
    bumpScale = 0.1,
    normalScale = 2.0,
    flatShading = false,
    transparent = false,
    side = THREE.FrontSide,
    color = new THREE.Color(0xf0e0c0),
    initialRotation = 0,
} = {}) {

    try {
        // Load texture
        const colorTexture = new THREE.TextureLoader().load(colorMapURL);
        colorTexture.mapping = THREE.EquirectangularReflectionMapping;
        colorTexture.minFilter = THREE.LinearFilter;
        colorTexture.magFilter = THREE.LinearFilter;

        // Create material properties
        const materialProps = {
            map: colorTexture,
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
        };

        // Load and apply normal map only if provided
        if (normalMapURL) {
            const normalTexture = new THREE.TextureLoader().load(normalMapURL);
            normalTexture.mapping = THREE.EquirectangularReflectionMapping;
            normalTexture.minFilter = THREE.LinearMipMapLinearFilter;
            normalTexture.magFilter = THREE.LinearFilter;

            materialProps.normalMap = normalTexture;
            materialProps.normalScale = new THREE.Vector2(normalScale, normalScale);
            materialProps.bumpMap = normalTexture;
            materialProps.bumpScale = bumpScale;
        }

        const jupiterMaterial = new THREE.MeshPhysicalMaterial(materialProps);

        const jupiterGeometry = new THREE.SphereGeometry(
            radius,
            widthSegments,
            heightSegments,
            0,
            Math.PI * 2,
            0,
            Math.PI
        );

        // Apply oblateness - Jupiter has significant polar flattening
        jupiterGeometry.scale(1, 1 - oblateness, 1);

        const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
        jupiter.rotation.y = initialRotation;

        return jupiter;

    } catch (e) {
        console.error("Error in createJupiter: ", e);
    }
}

export { createJupiter };