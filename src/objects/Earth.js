import * as THREE from 'three';
import dayMap from '../images/earth/8081_earthmap10k.jpg';
import nightMap from '../images/earth/8081_earthlights10k.jpg';
import normalMap from '../images/earth/Earth-normal-8k.jpg';
import cloudsMap from '../images/earth/8081_earthhiresclouds4K.jpg'; // Added clouds map

/**
 * Returns an Earth-like sphere mesh with customizable options
 * @param {Object} options
 * @param {boolean} options.night - Day or night mode (default: false)
 * @param {number} options.radius - Sphere radius (default: 3)
 * @param {number} options.widthSegments - Sphere width segments (default: 256)
 * @param {number} options.heightSegments - Sphere height segments (default: 256)
 * @param {string} options.colorMapURL - Path to color map image (default: colorMap)
 * @param {string} options.normalMapURL - Path to normal map image (default: normalMap)
 * @param {string} options.cloudsMapURL - Path to clouds map image (default: cloudsMap)
 * @param {number} options.oblateness - Degree of oblateness (default: 0.0034)
 * @param {number} options.roughness - Material roughness (default: 0.4)
 * @param {number} options.metalness - Material metalness (default:  0.001)
 * @param {number} options.reflectivity - Material reflectivity (default: 0.1)
 * @param {number} options.clearcoat - Material clearcoat (default: 0.15)
 * @param {number} options.aoMapIntensity - Ambient occlusion map intensity (default: 0.8)
 * @param {number} options.lightMapIntensity - Light map intensity (default: 1.0)
 * @param {number} options.envMapIntensity - Environment map intensity (default: 0.3)
 * @param {number} options.bumpScale - Bump scale (default: 0.05)
 * @param {number} options.normalScale - Normal scale (default: 1.0)
 * @param {number} options.flatShading - Flat shading (default: false)
 * @param {number} options.transparent - Transparency (default: false)
 * @param {number} options.side - Material side (default: THREE.FrontSide)
 * @param {THREE.Color} options.color - Base color (default: new THREE.Color(0xffffff))
 * @param {number} options.initialRotation - Initial rotation of the sphere (default: -1 * Math.PI / 2)
 * @param {boolean} options.showClouds - Whether to show cloud layer (default: true)
 * @param {number} options.cloudsOpacity - Opacity of cloud layer (default: 0.8)
 * @returns {THREE.Group} - Group containing Earth mesh and optional cloud layer
 */
function createEarth({
    night = false,
    radius = 3,
    widthSegments = 256,
    heightSegments = 256,
    colorMapURL = dayMap,
    nightMapURL = nightMap,
    normalMapURL = normalMap,
    cloudsMapURL = cloudsMap,
    oblateness = 0.0034, // Earth's oblateness
    roughness = 0.8, // Increased to reduce metallic appearance
    metalness = 0.0, // Removed metalness completely
    reflectivity = 0.0, // Reduced reflectivity
    clearcoat = 0.0, // Removed clearcoat
    aoMapIntensity = 0.8,
    lightMapIntensity = 1.0,
    envMapIntensity = 0.2, // Slightly reduced
    bumpScale = 0.05, // Lower for Earth's smoother surface
    normalScale = 1, // Reduced for less exaggerated terrain
    flatShading = false,
    transparent = false,
    side = THREE.FrontSide,
    color = new THREE.Color(0xffffff), // White base color to not tint the texture
    initialRotation = -1 * Math.PI / 2,
    showClouds = true,
    cloudsOpacity = 0.6 // Slightly reduced cloud opacity
} = {}) {

    try {
        // Create a group to hold Earth and clouds
        const earthGroup = new THREE.Group();

        // Load textures
        const colorTexture = !night ? new THREE.TextureLoader().load(colorMapURL) : new THREE.TextureLoader().load(nightMapURL);
        const normalTexture = new THREE.TextureLoader().load(normalMapURL);

        colorTexture.mapping = THREE.EquirectangularReflectionMapping;
        normalTexture.mapping = THREE.EquirectangularReflectionMapping;

        colorTexture.minFilter = THREE.LinearFilter;
        colorTexture.magFilter = THREE.LinearFilter;
        normalTexture.minFilter = THREE.LinearMipMapLinearFilter;
        normalTexture.magFilter = THREE.LinearFilter;

        // Create material using texture
        const earthMaterial = new THREE.MeshPhysicalMaterial({
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

        const earthGeometry = new THREE.SphereGeometry(
            radius,
            widthSegments,
            heightSegments,
            0,
            Math.PI * 2,
            0,
            Math.PI
        );

        earthGeometry.scale(1, 1 - oblateness, 1);

        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.rotation.y = initialRotation;

        earthGroup.add(earth);

        // Add cloud layer if enabled
        if (showClouds) {
            const cloudsTexture = new THREE.TextureLoader().load(cloudsMapURL);
            cloudsTexture.minFilter = THREE.LinearFilter;
            cloudsTexture.magFilter = THREE.LinearFilter;

            const cloudsMaterial = new THREE.MeshPhysicalMaterial({
                map: cloudsTexture,
                transparent: true,
                opacity: cloudsOpacity,
                blending: THREE.AdditiveBlending,
                roughness: 1,
                metalness: 0,
            });

            const cloudsGeometry = new THREE.SphereGeometry(
                radius * 1.001, // Slightly larger than Earth
                widthSegments / 2, // Lower resolution is fine for clouds
                heightSegments / 2,
                0,
                Math.PI * 2,
                0,
                Math.PI
            );

            const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
            clouds.rotation.y = initialRotation;

            earthGroup.add(clouds);
        }

        return earthGroup;

    } catch (e) {
        console.error("Error in createEarth: ", e);
        return new THREE.Group(); // Return empty group on error
    }
}

export { createEarth };