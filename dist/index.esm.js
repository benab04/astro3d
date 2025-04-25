import * as THREE from 'three';

// src/utils/createCelestialBody.js

/**
 * Factory function to create celestial bodies with consistent setup patterns
 * @param {Object} options Configuration options for the celestial body
 * @returns {Object} The created celestial body and helper functions
 */
// Modified createCelestialBody.js to handle texture loading failures
function createCelestialBody(options) {
    const {
        radius = 3,
        segments = 256,
        textures = {},
        materialOptions = {},
        oblateness = 0,
        initialRotation = { x: 0, y: 0, z: 0 },
        loadingManager = new THREE.LoadingManager()
    } = options;
    console.log(options);

    // Function to initialize the body
    const create = (scene, onProgress, onLoad) => {
        // Configure loading manager if callbacks provided
        if (onProgress) {
            loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
                const progress = (itemsLoaded / itemsTotal) * 100;
                onProgress(Math.round(progress));
            };
        }

        if (onLoad) {
            loadingManager.onLoad = onLoad;
        }

        // Error handler for loading manager
        loadingManager.onError = (url) => {
            console.error('Error loading texture:', url);
        };

        // Create texture loader
        const textureLoader = new THREE.TextureLoader(loadingManager);

        // Load all textures
        const loadedTextures = {};
        let textureLoadFailed = false;

        Object.entries(textures).forEach(([key, path]) => {
            console.log(`Loading texture "${key}" from path:`, path);

            try {
                const texture = textureLoader.load(
                    path,
                    (tex) => console.log(`Texture "${key}" loaded successfully`),
                    undefined,
                    (err) => {
                        console.error(`Error loading texture "${key}":`, err);
                        textureLoadFailed = true;
                    }
                );

                // Apply common texture settings
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;

                if (key === 'normalMap') {
                    texture.mapping = THREE.EquirectangularReflectionMapping;
                }

                loadedTextures[key] = texture;
            } catch (err) {
                console.error(`Exception while setting up texture "${key}":`, err);
                textureLoadFailed = true;
            }
        });

        // Create geometry
        const geometry = new THREE.SphereGeometry(
            radius,
            segments,
            segments,
            0,
            Math.PI * 2,
            0,
            Math.PI
        );

        // Apply oblateness if specified
        if (oblateness > 0) {
            geometry.scale(1, 1 - oblateness, 1);
        }

        // Create material - use fallback if texture loading failed
        let material;

        if (textureLoadFailed) {
            console.warn("Using fallback material due to texture loading issues");
            material = new THREE.MeshStandardMaterial({
                color: materialOptions.color || new THREE.Color(0x707070),
                roughness: materialOptions.roughness || 1.0,
                metalness: materialOptions.metalness || 0.2,
                flatShading: materialOptions.flatShading || false
            });
        } else {
            material = new THREE.MeshPhysicalMaterial({
                ...loadedTextures,
                ...materialOptions
            });
        }

        // Create mesh
        const mesh = new THREE.Mesh(geometry, material);

        // Apply initial rotation
        mesh.rotation.x = initialRotation.x || 0;
        mesh.rotation.y = initialRotation.y || 0;
        mesh.rotation.z = initialRotation.z || 0;

        // Add to scene if provided
        if (scene) {
            scene.add(mesh);
        }

        return mesh;
    };

    // Return the creation function and any other needed utilities
    return {
        create,
        radius,
        defaultMaterialOptions: materialOptions
    };
}

// const colorMap = new URL("./assets/textures/moon/colorMap.jpg", import.meta.url)
const colorMap = new URL('./assets/textures/moon/colorMap.jpg', import.meta.url).href;

const normalMap = new URL("./assets/textures/moon/normalMap.jpg", import.meta.url).href;
/**
 * Creates a realistic 3D Moon object
 */
const Moon = createCelestialBody({
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
function setupMoonEnvironment(scene) {
    // Add default lighting for moon
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(3.3, -2, 10);
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(pointLight, ambientLight);
}

// src/index.js
// Import future celestial bodies
// import { Mars } from './mars.js';

/**
 * Get a celestial body by name
 * @param {string} name - Name of the celestial body ('moon', 'mars', etc.)
 * @returns {Object} The celestial body object or null if not found
 */
function getCelestialBody(name) {
    const bodies = {
        moon: Moon,
        // Add more when implemented
        // mars: Mars,
    };

    return bodies[name.toLowerCase()] || null;
}

// Export utility functions
function createDefaultRenderer(container, width, height) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width || window.innerWidth, height || window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    return renderer;
}

function createDefaultCamera(aspect) {
    const camera = new THREE.PerspectiveCamera(
        75,
        aspect || window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 6;
    return camera;
}

export { Moon, createDefaultCamera, createDefaultRenderer, getCelestialBody, setupMoonEnvironment };
//# sourceMappingURL=index.esm.js.map
