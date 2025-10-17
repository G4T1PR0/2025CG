import * as THREE from 'three';

// シーン、カメラ、レンダラーの作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('container').appendChild(renderer.domElement);

// パーティクルの作成
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 10000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

let url = window.location.href;
let idx = url.lastIndexOf("/");
let endUrl = url.substring(idx + 1);

console.log(endUrl);

let color = 0x2e8b57;

if (endUrl === "index.html") {
    color = 0x2e8b57;

}

else if (endUrl === "lesson1-org1.html") {
    color = 0x6A12BC;
}

else if (endUrl === "lesson1-org2.html") {
    color = 0xFF8C00;
}

else if (endUrl === "lesson1-org3.html") {
    color = 0x1E90FF;
}

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    color: color
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 30;

// アニメーション
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    requestAnimationFrame(animate);

    particlesMesh.rotation.x += 0.001;
    particlesMesh.rotation.y += 0.001;

    camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;

    renderer.render(scene, camera);
}

animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});