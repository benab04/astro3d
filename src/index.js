// Import your image
import imageUrl from './images/image.jpg';
import * as THREE from 'three';

// Class for handling the 3D sphere with image texture
class ImageSphere {
    constructor(options = {}) {
        this.options = {
            radius: options.radius || 5,
            widthSegments: options.widthSegments || 32,
            heightSegments: options.heightSegments || 32,
            rotationSpeed: options.rotationSpeed || 0.005,
            backgroundColor: options.backgroundColor || 0x000000
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.sphere = null;
        this.animationFrameId = null;
    }

    init() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.options.backgroundColor);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(directionalLight);

        // Create sphere geometry
        const geometry = new THREE.SphereGeometry(
            this.options.radius,
            this.options.widthSegments,
            this.options.heightSegments
        );

        // Create material with the image texture
        const texture = new THREE.TextureLoader().load(imageUrl);
        const material = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide
        });

        // Create sphere mesh
        this.sphere = new THREE.Mesh(geometry, material);
        this.scene.add(this.sphere);

        return this;
    }

    render(container, width = 800, height = 600) {
        // Find container element
        let targetElement;
        if (typeof container === 'string') {
            targetElement = document.querySelector(container);
            if (!targetElement) {
                console.error(`Element with selector "${container}" not found`);
                return null;
            }
        } else if (container instanceof HTMLElement) {
            targetElement = container;
        } else {
            console.error('Container must be a CSS selector string or HTMLElement');
            return null;
        }

        // Set container dimensions
        const containerWidth = width || targetElement.clientWidth || 800;
        const containerHeight = height || targetElement.clientHeight || 600;

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            containerWidth / containerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 15;

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(containerWidth, containerHeight);

        // Clear container and add canvas
        while (targetElement.firstChild) {
            targetElement.removeChild(targetElement.firstChild);
        }
        targetElement.appendChild(this.renderer.domElement);

        // Start animation
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            if (!targetElement || !this.camera || !this.renderer) return;

            const width = targetElement.clientWidth;
            const height = targetElement.clientHeight;

            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        });

        return this;
    }

    animate() {
        this.animationFrameId = requestAnimationFrame(() => this.animate());

        if (this.sphere) {
            // Rotate the sphere
            this.sphere.rotation.y += this.options.rotationSpeed;
        }

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        return this;
    }

    setRotationSpeed(speed) {
        this.options.rotationSpeed = speed;
        return this;
    }
}

// Function to create and render a 3D sphere with the image as texture
function createImageSphere(container, options = {}) {
    const sphere = new ImageSphere(options);
    sphere.init().render(container, options.width, options.height);
    return sphere;
}

// Legacy functions that now use the 3D sphere instead
function createImageDiv(options = {}) {
    console.warn('createImageDiv is deprecated. Use createImageSphere instead.');
    const container = document.createElement('div');
    container.className = 'my-image-package-container';
    container.style.width = options.width || '400px';
    container.style.height = options.height || '400px';

    // Create a sphere inside this div
    createImageSphere(container, options);

    return container;
}

function appendImageTo(selector, options = {}) {
    const targetElement = document.querySelector(selector);
    if (!targetElement) {
        console.error(`Element with selector "${selector}" not found`);
        return null;
    }

    return createImageSphere(targetElement, options);
}

// Export functions
export { createImageSphere, createImageDiv, appendImageTo, ImageSphere };
// export default { createImageSphere, createImageDiv, appendImageTo, ImageSphere };