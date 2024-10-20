
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as lil from 'lil-gui';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



let ambientLight= new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


let directionalLight= new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

let pointLight= new THREE.PointLight(0xffffff, 1, 10, 2);
pointLight.position.set(1, -1, 1);
scene.add(pointLight);










/*
// const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
// highIntensityLight.position.set(10, 20, 15);
// scene.add(highIntensityLight);





// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 10, 7.5);
// scene.add(directionalLight);


// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);


// const pointLight = new THREE.PointLight(0xffffff, 1, 100, 2);
// pointLight.position.set(0, 0, 0);
// scene.add(pointLight);


// const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 5);
// scene.add(highIntensityLightHelper);


// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);


// const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
// scene.add(pointLightHelper);
*/

let loader = new THREE.TextureLoader();
let color =loader.load("./text/color.jpg")
let roughness =loader.load("./text/roughness.jpg")
let normal =loader.load("./text/normal.png")


const geometry = new THREE.BoxGeometry(3, 1.8, 2);
const material = new THREE.MeshStandardMaterial( { map: color, roughnessMap: roughness, normalMap: normal} );
const cube = new THREE.Mesh( geometry, material );

const controls = new OrbitControls(camera, renderer.domElement);


controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;



scene.add( cube );




window.addEventListener('resize', onWindowResize, false);

import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

// Create GUI
const gui = new GUI();




// Material folder
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'wireframe');
materialFolder.add(material, 'metalness', 0, 1);
materialFolder.add(material, 'roughness', 0, 1);
materialFolder.add(material, 'emissive', 0x000000);
materialFolder.add(material, 'emissiveIntensity', 0, 1);

// Mesh folder
const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
meshFolder.add(cube.position, 'x', -10, 10);
meshFolder.add(cube.position, 'y', -10, 10);
meshFolder.add(cube.position, 'z', -10, 10);
meshFolder.add(cube.scale, 'x', 0.1, 2);
meshFolder.add(cube.scale, 'y', 0.1, 2);
meshFolder.add(cube.scale, 'z', 0.1, 2);

// Open folders
materialFolder.open();
meshFolder.open();


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();  











