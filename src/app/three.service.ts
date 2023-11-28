import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private starGeometry: THREE.BufferGeometry;
  private stars: THREE.Points;
  private sphere: THREE.Mesh;


  init(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    this.starGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    this.starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xAAAAAA, size: 0.7 });
    this.stars = new THREE.Points(this.starGeometry, starMaterial);

    this.scene.add(this.stars);
    this.camera.position.z = 3;
    this.loadTextureAndCreateSphere();
    this.adjustCanvasSize();
    this.animate();
  }

  loadTextureAndCreateSphere() {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('../assets/Master (4).png', (texture) => {
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      this.sphere = new THREE.Mesh(geometry, material);
      this.scene.add(this.sphere);
    });
  }
  animate() {
    requestAnimationFrame(() => this.animate());

    this.stars.rotation.x += 0.001;
    this.stars.rotation.y += 0.001;

    if (this.sphere) {
      this.sphere.rotation.y -= 0.01;
      
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  
  adjustCanvasSize() {
    const canvas = this.renderer.domElement;
    canvas.style.height = (window.innerHeight / 2) + 'px';
    this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }
}