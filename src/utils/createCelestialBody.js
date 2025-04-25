// src/utils/createCelestialBody.js
import * as THREE from 'three';

/**
 * Factory function to create celestial bodies with consistent setup patterns
 * @param {Object} options Configuration options for the celestial body
 * @returns {Object} The created celestial body and helper functions
 */
// Modified createCelestialBody.js to handle texture loading failures
export function createCelestialBody(options) {
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