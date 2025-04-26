import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import sunColorMap from '../images/sun/sunmap.jpg'; // Default sun texture

/**
 * Creates a realistic sun with corona, flares, and emission effects
 * 
 * @param {Object} options
 * @param {number} options.radius - Sun radius (default: 5)
 * @param {number} options.segments - Sphere segments (default: 128)
 * @param {string} options.colorMapURL - Path to color map image (default: sunColorMap)
 * @param {THREE.Color} options.emissiveColor - Base emission color (default: 0xffcc00)
 * @param {THREE.Color} options.coronaColor - Corona glow color (default: 0xffaa00)
 * @param {number} options.emissiveIntensity - Intensity of emission (default: 2.0)
 * @param {boolean} options.addFlares - Whether to add solar flares (default: true)
 * @param {number} options.flareCount - Number of flares to generate (default: 7)
 * @param {THREE.Color} options.flareColor - Color of solar flares (default: 0xffdd44)
 * @param {number} options.rotationSpeed - Speed of sun rotation (default: 0.0005)
 * @param {number} options.turbulenceSpeed - Speed of texture turbulence (default: 0.003)
 * @param {Scene} options.scene - Three.js scene to add post-processing (if using bloom)
 * @param {Camera} options.camera - Three.js camera (if using bloom)
 * @param {WebGLRenderer} options.renderer - Three.js renderer (if using bloom)
 * @param {boolean} options.useBloom - Whether to set up bloom post-processing (default: true)
 * @param {number} options.bloomStrength - Bloom effect strength (default: 1.5)
 * @param {number} options.bloomRadius - Bloom effect radius (default: 0.75)
 * @param {number} options.bloomThreshold - Bloom effect threshold (default: 0.2)
 * 
 * @returns {Object} Object containing the sun group and optionally a setupRender function for post-processing
 */
function createSun({
    radius = 5,
    segments = 128,
    colorMapURL = sunColorMap,
    emissiveColor = new THREE.Color(0xffcc00),
    coronaColor = new THREE.Color(0xffaa00),
    emissiveIntensity = 2.0,
    addFlares = true,
    flareCount = 7,
    flareColor = new THREE.Color(0xffdd44),
    rotationSpeed = 0.0005,
    turbulenceSpeed = 0.003,
    scene = null,
    camera = null,
    renderer = null,
    useBloom = true,
    bloomStrength = 1.5,
    bloomRadius = 0.75,
    bloomThreshold = 0.2
} = {}) {
    // Create a group to hold all sun components
    const sunGroup = new THREE.Group();
    let composer = null;
    let time = 0;

    try {
        // Load texture
        const textureLoader = new THREE.TextureLoader();
        const sunTexture = textureLoader.load(colorMapURL);

        // Create noise texture for turbulence
        const noiseTexture = textureLoader.load(colorMapURL);

        // Create the sun's surface material with custom shader for dynamic effects
        const sunMaterial = new THREE.ShaderMaterial({
            uniforms: {
                sunTexture: { value: sunTexture },
                noiseTexture: { value: noiseTexture },
                time: { value: 0 },
                emissiveColor: { value: emissiveColor },
                emissiveIntensity: { value: emissiveIntensity }
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                
                void main() {
                    vUv = uv;
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D sunTexture;
                uniform sampler2D noiseTexture;
                uniform float time;
                uniform vec3 emissiveColor;
                uniform float emissiveIntensity;
                
                varying vec2 vUv;
                varying vec3 vNormal;
                
                void main() {
                    // Create turbulent UV coordinates
                    vec2 turbulenceUv = vUv + vec2(
                        sin(vUv.y * 10.0 + time * 0.1) * 0.03,
                        cos(vUv.x * 10.0 + time * 0.1) * 0.03
                    );
                    
                    // Sample the texture with turbulence
                    vec4 texColor = texture2D(sunTexture, turbulenceUv);
                    vec4 noiseColor = texture2D(noiseTexture, vUv * 2.0 + vec2(time * 0.01, time * 0.02));
                    
                    // Create hot spots
                    float hotspot = pow(noiseColor.r, 2.0) * 2.0;
                    
                    // Edge glow
                    float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    
                    // Combine colors with emission
                    vec3 finalColor = mix(
                        texColor.rgb * emissiveColor, 
                        emissiveColor * 1.5, 
                        hotspot
                    );
                    
                    // Add fresnel edge glow
                    finalColor += emissiveColor * fresnel * 0.5;
                    
                    // Apply emission intensity
                    finalColor *= emissiveIntensity;
                    
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `
        });

        // Create the main sun sphere
        const sunGeometry = new THREE.SphereGeometry(radius, segments, segments);
        const sunSphere = new THREE.Mesh(sunGeometry, sunMaterial);
        sunGroup.add(sunSphere);

        // Create corona (outer glow)
        const coronaMaterial = new THREE.ShaderMaterial({
            uniforms: {
                coronaColor: { value: coronaColor },
                time: { value: 0 }
            },
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 coronaColor;
                uniform float time;
                varying vec3 vNormal;
                
                float noise(vec3 p) {
                    // Simple noise function
                    vec3 i = floor(p);
                    vec3 f = fract(p);
                    f = f*f*(3.0-2.0*f);
                    
                    return mix(mix(mix(sin(i.x+i.y+i.z), 
                                      sin(i.x+i.y+i.z+1.0), f.z),
                                 mix(sin(i.x+i.y+i.z+2.0), 
                                     sin(i.x+i.y+i.z+3.0), f.z), f.y),
                            mix(mix(sin(i.x+i.y+i.z+4.0), 
                                    sin(i.x+i.y+i.z+5.0), f.z),
                                mix(sin(i.x+i.y+i.z+6.0), 
                                    sin(i.x+i.y+i.z+7.0), f.z), f.y), f.x);
                }
                
                void main() {
                    // Create a view-facing rim effect
                    float rim = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 4.0);
                    
                    // Add some animated noise for texture
                    vec3 noiseCoord = vNormal * 3.0 + vec3(0, 0, time * 0.1);
                    float noiseValue = noise(noiseCoord) * 0.5 + 0.5;
                    
                    // Create more detailed corona edge
                    float edge = pow(rim, 2.0 + noiseValue);
                    
                    // Apply corona color and fade with distance from edge
                    vec3 finalColor = coronaColor * edge;
                    
                    gl_FragColor = vec4(finalColor, edge * 0.9);
                }
            `,
            side: THREE.BackSide,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        // Create corona mesh (larger than sun)
        const coronaGeometry = new THREE.SphereGeometry(radius * 1.2, segments, segments);
        const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
        sunGroup.add(corona);

        // Create outer atmosphere
        const atmosphereMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(coronaColor).multiplyScalar(0.6) },
                time: { value: 0 }
            },
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                uniform float time;
                varying vec3 vNormal;
                
                void main() {
                    float edge = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 8.0);
                    gl_FragColor = vec4(color, edge * 0.4);
                }
            `,
            side: THREE.BackSide,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const atmosphereGeometry = new THREE.SphereGeometry(radius * 1.8, segments / 2, segments / 2);
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        sunGroup.add(atmosphere);

        // Add solar flares if enabled
        if (addFlares) {
            for (let i = 0; i < flareCount; i++) {
                // Create a solar flare
                const flareSize = radius * (0.3 + Math.random() * 0.5);
                const flareGeometry = new THREE.ConeGeometry(
                    flareSize * 0.3,  // radius
                    flareSize,        // height
                    8,                // radial segments
                    1,                // height segments
                    true              // open ended
                );

                const flareMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        flareColor: { value: flareColor },
                        time: { value: 0 }
                    },
                    vertexShader: `
                        varying vec2 vUv;
                        varying vec3 vPosition;
                        
                        void main() {
                            vUv = uv;
                            vPosition = position;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,
                    fragmentShader: `
                        uniform vec3 flareColor;
                        uniform float time;
                        varying vec2 vUv;
                        varying vec3 vPosition;
                        
                        void main() {
                            // Fade along the length of the flare
                            float fade = pow(vUv.y, 2.0);
                            
                            // Add pulsing effect
                            float pulse = 0.8 + 0.2 * sin(time * 3.0 + vUv.y * 10.0);
                            
                            // Edge fading
                            float edge = 1.0 - 2.0 * abs(vUv.x - 0.5);
                            edge = pow(edge, 0.5);
                            
                            // Combine effects
                            float alpha = fade * edge * pulse;
                            
                            // Apply color and transparency
                            gl_FragColor = vec4(flareColor * alpha, alpha * 0.7);
                        }
                    `,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    side: THREE.DoubleSide
                });

                const flare = new THREE.Mesh(flareGeometry, flareMaterial);

                // Position and orient flare
                const theta = Math.random() * Math.PI * 2;
                const phi = (Math.random() - 0.5) * Math.PI * 0.8;

                flare.position.x = radius * Math.sin(theta) * Math.cos(phi);
                flare.position.y = radius * Math.sin(phi);
                flare.position.z = radius * Math.cos(theta) * Math.cos(phi);

                // Orient flare to point outward
                flare.lookAt(flare.position.clone().multiplyScalar(2));

                // Randomize rotation around its axis
                flare.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.random() * Math.PI * 2);

                sunGroup.add(flare);
            }
        }

        // Create light rays
        const rayCount = 16;
        for (let i = 0; i < rayCount; i++) {
            const angle = (i / rayCount) * Math.PI * 2;
            const rayLength = radius * (2 + Math.random() * 3);

            const rayGeometry = new THREE.PlaneGeometry(rayLength, rayLength * 0.1);
            const rayMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    rayColor: { value: new THREE.Color(coronaColor).multiplyScalar(0.8) },
                    time: { value: 0 }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 rayColor;
                    uniform float time;
                    varying vec2 vUv;
                    
                    void main() {
                        // Fade from center outward
                        float fade = 1.0 - vUv.x;
                        fade = pow(fade, 1.5);
                        
                        // Add pulsing animation
                        float pulse = 0.7 + 0.3 * sin(time * 2.0 + vUv.x * 5.0);
                        
                        // Edge fading
                        float edge = 1.0 - 2.0 * abs(vUv.y - 0.5);
                        edge = pow(edge, 2.0);
                        
                        // Combine for final alpha
                        float alpha = fade * edge * pulse * 0.7;
                        
                        gl_FragColor = vec4(rayColor, alpha);
                    }
                `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                side: THREE.DoubleSide
            });

            const ray = new THREE.Mesh(rayGeometry, rayMaterial);

            // Position ray to start at sun's edge facing outward
            ray.position.x = radius * 1.1 * Math.cos(angle);
            ray.position.z = radius * 1.1 * Math.sin(angle);

            // Orient ray to point outward
            ray.rotation.y = Math.PI / 2 - angle;
            ray.rotation.x = Math.PI / 2;

            sunGroup.add(ray);
        }

        // Add a point light at the center of the sun
        const sunLight = new THREE.PointLight(emissiveColor, 2.0, radius * 50);
        sunLight.castShadow = true;
        sunGroup.add(sunLight);

        // Set up the bloom effect if requested
        let setupRender = null;

        if (useBloom && scene && camera && renderer) {
            // Create the effect composer for post-processing
            composer = new EffectComposer(renderer);

            // Add the render pass
            const renderPass = new RenderPass(scene, camera);
            composer.addPass(renderPass);

            // Add the bloom pass
            const bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                bloomStrength,
                bloomRadius,
                bloomThreshold
            );
            composer.addPass(bloomPass);

            // Create and return a render function
            setupRender = function (renderer, scene, camera) {
                // Handle window resize
                window.addEventListener('resize', () => {
                    const width = window.innerWidth;
                    const height = window.innerHeight;

                    renderer.setSize(width, height);
                    composer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                });

                // Return the animation function
                return function () {
                    composer.render();
                };
            };
        }

        // Animation function to update time uniforms
        sunGroup.userData.update = function (delta) {
            time += delta || 0.016; // Use provided delta or default to ~60fps

            // Update all shader time uniforms
            sunGroup.traverse((child) => {
                if (child.isMesh && child.material.uniforms && child.material.uniforms.time) {
                    child.material.uniforms.time.value = time;
                }
            });

            // Rotate the sun
            sunSphere.rotation.y += rotationSpeed;
        };

        // Return the sun group and optionally the bloom setup function
        return {
            sunGroup,
            setupRender
        };

    } catch (e) {
        console.error("Error in createSun:", e);
        return { sunGroup: new THREE.Group() }; // Return empty group on error
    }
}

export { createSun };