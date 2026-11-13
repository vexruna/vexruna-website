import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const root = document.querySelector("#model");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera( 75, 500/500 , 0.1, 1000 );
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
root.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const loader = new GLTFLoader();
const suzanne_url = '/assets/suzanne.glb';

let suzanne;

// Load GLB model
loader.load(suzanne_url, (gltf) => {
	suzanne = gltf.scene;
	scene.add(suzanne);
    suzanne.scale.set(1, 1, 1);
},
undefined,
(error) => {
		console.error('Suzanne did not load:', error);
	}
);

function animate() {
  requestAnimationFrame(animate);

  if (suzanne) {
    suzanne.rotation.y += 0.005;
  }
  renderer.render(scene, camera);
}

animate();
