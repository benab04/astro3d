import * as THREE from 'three';
import issTextureMap from "../images/iss/iss_main.jpg";
import solarPanelMap from "../images/iss/solar_panel.jpg";
import moduleTextureMap from "../images/iss/module_texture.jpg";

/**
 * Returns an International Space Station (ISS) mesh with customizable options
 * @param {Object} options
 * @param {number} options.issScale - Overall scale factor for ISS (default: 1.0)
 * @param {number} options.mainTrussWidth - Width of main truss (default: 0.08)
 * @param {number} options.mainTrussHeight - Height of main truss (default: 0.02)
 * @param {number} options.mainTrussLength - Length of main truss (default: 0.3)
 * @param {number} options.moduleWidth - Width of habitation modules (default: 0.04)
 * @param {number} options.moduleHeight - Height of habitation modules (default: 0.04)
 * @param {number} options.moduleLength - Length of habitation modules (default: 0.08)
 * @param {number} options.solarPanelWidth - Width of solar panels (default: 0.12)
 * @param {number} options.solarPanelHeight - Height of solar panels (default: 0.003)
 * @param {number} options.solarPanelLength - Length of solar panels (default: 0.16)
 * @param {number} options.solarPanelOffset - Distance of panels from center (default: 0.15)
 * @param {string} options.issTextureMapURL - Path to ISS texture (default: issTextureMap)
 * @param {string} options.solarPanelMapURL - Path to solar panel texture (default: solarPanelMap)
 * @param {string} options.moduleTextureMapURL - Path to module texture (default: moduleTextureMap)
 * @param {number} options.trussRoughness - Truss material roughness (default: 0.5)
 * @param {number} options.trussMetalness - Truss material metalness (default: 0.8)
 * @param {number} options.moduleRoughness - Module material roughness (default: 0.4)
 * @param {number} options.moduleMetalness - Module material metalness (default: 0.6)
 * @param {number} options.panelRoughness - Solar panel roughness (default: 0.2)
 * @param {number} options.panelMetalness - Solar panel metalness (default: 0.5)
 * @param {THREE.Color} options.trussColor - Base color for truss (default: light gray)
 * @param {THREE.Color} options.moduleColor - Base color for modules (default: white)
 * @param {THREE.Color} options.panelColor - Base color for panels (default: blue)
 * @param {number} options.initialRotation - Initial rotation of the ISS (default: 0)
 * @param {Array|THREE.Vector3} options.lookAtTarget - Target position for ISS to face [x,y,z] (default: [0,0,0])
 * @returns {THREE.Group} - ISS group containing all components
 */
function createISS({
    issScale = 1.0,
    mainTrussWidth = 0.08,
    mainTrussHeight = 0.02,
    mainTrussLength = 0.3,
    moduleWidth = 0.04,
    moduleHeight = 0.04,
    moduleLength = 0.08,
    solarPanelWidth = 0.12,
    solarPanelHeight = 0.003,
    solarPanelLength = 0.16,
    solarPanelOffset = 0.15,
    issTextureMapURL = issTextureMap,
    solarPanelMapURL = solarPanelMap,
    moduleTextureMapURL = moduleTextureMap,
    trussRoughness = 0.5,
    trussMetalness = 0.8,
    moduleRoughness = 0.4,
    moduleMetalness = 0.6,
    panelRoughness = 0.2,
    panelMetalness = 0.5,
    trussColor = new THREE.Color(0xDDDDDD),
    moduleColor = new THREE.Color(0xFFFFFF),
    panelColor = new THREE.Color(0x2244AA),
    initialRotation = 0,
    lookAtTarget = [0, 0, 0]
} = {}) {

    try {
        // Create texture loader
        const textureLoader = new THREE.TextureLoader();

        // Load textures
        const issTexture = textureLoader.load(issTextureMapURL);
        const solarPanelTexture = textureLoader.load(solarPanelMapURL);
        const moduleTexture = textureLoader.load(moduleTextureMapURL);

        // Create ISS group
        const issGroup = new THREE.Group();

        // Create main truss
        const trussMaterial = new THREE.MeshStandardMaterial({
            map: issTexture,
            roughness: trussRoughness,
            metalness: trussMetalness,
            color: trussColor
        });
        const trussGeometry = new THREE.BoxGeometry(
            mainTrussLength * issScale,
            mainTrussHeight * issScale,
            mainTrussWidth * issScale
        );
        const mainTruss = new THREE.Mesh(trussGeometry, trussMaterial);
        issGroup.add(mainTruss);

        // Create habitation modules (main cluster)
        const moduleMaterial = new THREE.MeshStandardMaterial({
            map: moduleTexture,
            roughness: moduleRoughness,
            metalness: moduleMetalness,
            color: moduleColor
        });

        // Main laboratory module
        const labModuleGeometry = new THREE.CylinderGeometry(
            moduleWidth / 2 * issScale,
            moduleWidth / 2 * issScale,
            moduleLength * issScale,
            16
        );
        labModuleGeometry.rotateZ(Math.PI / 2); // Rotate to align with truss

        const labModule = new THREE.Mesh(labModuleGeometry, moduleMaterial);
        labModule.position.set(0, -moduleHeight * issScale, 0);
        issGroup.add(labModule);

        // Secondary modules
        const module1Geometry = new THREE.CylinderGeometry(
            moduleWidth / 2 * 0.8 * issScale,
            moduleWidth / 2 * 0.8 * issScale,
            moduleLength * 0.7 * issScale,
            16
        );
        module1Geometry.rotateZ(Math.PI / 2);

        const module1 = new THREE.Mesh(module1Geometry, moduleMaterial);
        module1.position.set(-moduleLength * 0.6 * issScale, -moduleHeight * issScale, 0);
        module1.rotation.y = Math.PI / 6;
        issGroup.add(module1);

        const module2 = new THREE.Mesh(module1Geometry, moduleMaterial);
        module2.position.set(moduleLength * 0.6 * issScale, -moduleHeight * issScale, 0);
        module2.rotation.y = -Math.PI / 6;
        issGroup.add(module2);

        // Create solar panels
        const panelMaterial = new THREE.MeshStandardMaterial({
            map: solarPanelTexture,
            roughness: panelRoughness,
            metalness: panelMetalness,
            color: panelColor,
            side: THREE.DoubleSide
        });

        // Function to create a solar panel array (2 panels with connecting structure)
        const createPanelArray = (xPos) => {
            const panelArray = new THREE.Group();

            // Connecting mount
            const mountGeometry = new THREE.BoxGeometry(
                0.02 * issScale,
                0.02 * issScale,
                0.04 * issScale
            );
            const mount = new THREE.Mesh(mountGeometry, trussMaterial);
            mount.position.set(xPos, 0, 0);
            panelArray.add(mount);

            // Solar panels
            const panelGeometry = new THREE.BoxGeometry(
                solarPanelLength * issScale,
                solarPanelHeight * issScale,
                solarPanelWidth * issScale
            );

            const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
            panel1.position.set(xPos, 0, solarPanelOffset * issScale);
            panelArray.add(panel1);

            const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
            panel2.position.set(xPos, 0, -solarPanelOffset * issScale);
            panelArray.add(panel2);

            return panelArray;
        };

        // Create 4 solar panel arrays along the truss
        const panelArray1 = createPanelArray(mainTrussLength * 0.35 * issScale);
        const panelArray2 = createPanelArray(mainTrussLength * 0.12 * issScale);
        const panelArray3 = createPanelArray(-mainTrussLength * 0.12 * issScale);
        const panelArray4 = createPanelArray(-mainTrussLength * 0.35 * issScale);

        issGroup.add(panelArray1);
        issGroup.add(panelArray2);
        issGroup.add(panelArray3);
        issGroup.add(panelArray4);

        // Set initial rotation
        issGroup.rotation.y = initialRotation;

        // Set look-at target
        if (Array.isArray(lookAtTarget)) {
            issGroup.lookAt(lookAtTarget[0], lookAtTarget[1], lookAtTarget[2]);
        } else if (lookAtTarget instanceof THREE.Vector3) {
            issGroup.lookAt(lookAtTarget);
        } else {
            issGroup.lookAt(0, 0, 0);
        }

        return issGroup;

    } catch (e) {
        console.error("Error in createISS: ", e);
        return new THREE.Group(); // Return empty group on error
    }
}

export { createISS };