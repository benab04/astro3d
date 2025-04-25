// src/index.js
import * as THREE from 'three';
import { Moon, setupMoonEnvironment } from './moon.js';
// Import future celestial bodies
// import { Mars } from './mars.js';

/**
 * Get a celestial body by name
 * @param {string} name - Name of the celestial body ('moon', 'mars', etc.)
 * @returns {Object} The celestial body object or null if not found
 */
export function getCelestialBody(name) {
    const bodies = {
        moon: Moon,
        // Add more when implemented
        // mars: Mars,
    };

    return bodies[name.toLowerCase()] || null;
}

// Export individual celestial bodies directly
export { Moon, setupMoonEnvironment };

// Export utility functions
export function createDefaultRenderer(container, width, height) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width || window.innerWidth, height || window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    return renderer;
}

export function createDefaultCamera(aspect) {
    const camera = new THREE.PerspectiveCamera(
        75,
        aspect || window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 6;
    return camera;
}