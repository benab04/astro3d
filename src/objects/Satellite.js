import * as THREE from 'three';
import satelliteMap from "../images/satellite/satellite.jpg";
import solarPanelMap from "../images/satellite/solar_panel.jpg";

/**
 * Returns a satellite mesh with customizable options
 * @param {Object} options
 * @param {number} options.satelliteScale - Overall scale factor for satellite (default: 0.7)
 * @param {number} options.satelliteWidth - Width of satellite body (default: 0.04)
 * @param {number} options.satelliteHeight - Height of satellite body (default: 0.04)
 * @param {number} options.satelliteDepth - Depth of satellite body (default: 0.04)
 * @param {number} options.wingWidth - Width of solar panels (default: 0.08)
 * @param {number} options.wingHeight - Height of solar panels (default: 0.02)
 * @param {number} options.wingDepth - Depth of solar panels (default: 0.002)
 * @param {number} options.wingOffset - Distance of wings from center (default: 0.06)
 * @param {string} options.satelliteMapURL - Path to satellite texture (default: satelliteMap)
 * @param {string} options.solarPanelMapURL - Path to solar panel texture (default: solarPanelMap)
 * @param {number} options.satelliteRoughness - Satellite material roughness (default: 0.5)
 * @param {number} options.satelliteMetalness - Satellite material metalness (default: 0.8)
 * @param {number} options.panelRoughness - Solar panel roughness (default: 0.2)
 * @param {number} options.panelMetalness - Solar panel metalness (default: 0.5)
 * @param {THREE.Color} options.satelliteColor - Base color for satellite (default: white)
 * @param {THREE.Color} options.panelColor - Base color for panels (default: blue)
 * @param {number} options.initialRotation - Initial rotation of the satellite (default: 0)
 * @param {Array|THREE.Vector3} options.lookAtTarget - Target position for satellite to face [x,y,z] (default: [0,0,0])
 * @returns {THREE.Group} - Satellite group containing satellite body and solar panels
 */
function createSatellite({
    satelliteScale = 0.7,
    satelliteWidth = 0.04,
    satelliteHeight = 0.04,
    satelliteDepth = 0.04,
    wingWidth = 0.08,
    wingHeight = 0.02,
    wingDepth = 0.002,
    wingOffset = 0.06,
    satelliteMapURL = satelliteMap,
    solarPanelMapURL = solarPanelMap,
    satelliteRoughness = 0.5,
    satelliteMetalness = 0.8,
    panelRoughness = 0.2,
    panelMetalness = 0.5,
    satelliteColor = new THREE.Color(0xFFFFFF),
    panelColor = new THREE.Color(0x2244AA),
    initialRotation = 0,
    lookAtTarget = [0, 0, 0]
} = {}) {

    try {
        // Create texture loader
        const textureLoader = new THREE.TextureLoader();

        // Load textures
        const satelliteTexture = textureLoader.load(satelliteMapURL);
        const wingTexture = textureLoader.load(solarPanelMapURL);

        // Create satellite body
        const satelliteMaterial = new THREE.MeshStandardMaterial({
            map: satelliteTexture,
            roughness: satelliteRoughness,
            metalness: satelliteMetalness,
            color: satelliteColor
        });
        const satelliteGeometry = new THREE.BoxGeometry(
            satelliteWidth * satelliteScale,
            satelliteHeight * satelliteScale,
            satelliteDepth * satelliteScale
        );
        const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);

        // Create solar panels
        const wingGeometry = new THREE.BoxGeometry(
            wingWidth * satelliteScale,
            wingHeight * satelliteScale,
            wingDepth * satelliteScale
        );
        const wingMaterial = new THREE.MeshStandardMaterial({
            map: wingTexture,
            roughness: panelRoughness,
            metalness: panelMetalness,
            color: panelColor
        });
        const wing1 = new THREE.Mesh(wingGeometry, wingMaterial);
        const wing2 = new THREE.Mesh(wingGeometry, wingMaterial);

        wing1.position.set(wingOffset * satelliteScale, 0, 0);
        wing2.position.set(-wingOffset * satelliteScale, 0, 0);

        const satelliteGroup = new THREE.Group();
        satelliteGroup.add(satellite);
        satelliteGroup.add(wing1);
        satelliteGroup.add(wing2);

        satelliteGroup.rotation.y = initialRotation;

        if (Array.isArray(lookAtTarget)) {
            satelliteGroup.lookAt(lookAtTarget[0], lookAtTarget[1], lookAtTarget[2]);
        } else if (lookAtTarget instanceof THREE.Vector3) {
            satelliteGroup.lookAt(lookAtTarget);
        } else {
            satelliteGroup.lookAt(0, 0, 0);
        }

        return satelliteGroup;

    } catch (e) {
        console.error("Error in createSatellite: ", e);
    }


}

export { createSatellite };