import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// Import from your built package
import { Moon, createDefaultCamera, createDefaultRenderer } from '../dist/index.esm.js';

// DOM elements
const container = document.getElementById('canvas-container');
const loadingElement = document.getElementById('loading');
const progressBar = document.getElementById('progress-bar');

// Set up scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Set up camera
const camera = createDefaultCamera();
camera.position.z = 10;

// Set up renderer
const renderer = createDefaultRenderer(container);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add a visible coordinate grid to help with positioning
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// Add stars
addStars();

// Set up lighting
addLighting();

// Add an axes helper to show orientation
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// Create moon with loading progress tracking
let moon = null;
try {
    moon = Moon.create(
        scene,
        (progress) => {
            progressBar.style.width = `${progress}%`;
            console.log(`Loading: ${progress}%`);
        },
        () => {
            // Hide loading screen when complete
            loadingElement.style.display = 'none';
            console.log('Moon loaded successfully!');

            // Debug information about the moon
            console.log('Moon object:', moon);
            console.log('Moon position:', moon.position);
            console.log('Moon material:', moon.material);

            // Make sure the moon is visible by placing it at the center
            moon.position.set(0, 0, 0);

            // Add a wireframe to visualize the moon's geometry
            // const wireframe = new THREE.WireframeGeometry(moon.geometry);
            // const line = new THREE.LineSegments(wireframe);
            // line.material.color.set(0x00ff00);
            // scene.add(line);
        }
    );
} catch (error) {
    console.error('Error creating Moon:', error);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add debug info to check if textures are loading
window.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        console.log('Camera position:', camera.position);
        if (moon) {
            console.log('Moon material textures:', {
                map: moon.material.map ? 'Loaded' : 'Missing',
                normalMap: moon.material.normalMap ? 'Loaded' : 'Missing'
            });
        }
    }
});

// Start animation loop
animate();

// Helper function to add stars to the background
function addStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.05
    });

    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

// Helper function to add lighting to the scene
function addLighting() {
    // Main sunlight
    const sunLight = new THREE.DirectionalLight(0xFFFFFF, 1.5);
    sunLight.position.set(10, 5, 15);
    scene.add(sunLight);

    // Ambient light for shadows
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8); // Increased brightness
    scene.add(ambientLight);

    // Adding a point light at the camera position to ensure the moon is visible
    const cameraLight = new THREE.PointLight(0xFFFFFF, 1);
    camera.add(cameraLight);
    scene.add(camera);
}