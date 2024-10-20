import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create renderer
const canvas = document.getElementById('draw');
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('draw') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a box
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.enableZoom = true;
controls.dampingFactor = 0.05;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();
    
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
