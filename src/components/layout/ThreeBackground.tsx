import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.z = 30;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    try {
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    } catch { /* WebGL context may not support color space changes */ }
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x888888, 1.2);
    scene.add(ambient);

    const purple = 0x8b5cf6;
    const cyan = 0x06d6a0;
    const colors = [purple, cyan, 0xffffff];

    const vertexColorMaterial = (c: number) =>
      new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: false,
        color: c,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true,
        depthWrite: false,
      });

    const particleCount = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colorAttrs = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const r = 26 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const col = colors[Math.floor(Math.random() * colors.length)];
      const c = new THREE.Color(col);
      colorAttrs[i * 3] = c.r;
      colorAttrs[i * 3 + 1] = c.g;
      colorAttrs[i * 3 + 2] = c.b;
      phases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorAttrs, 3));

    const particleSystem = new THREE.Points(geometry, vertexColorMaterial(purple));
    scene.add(particleSystem);

    const wireMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const shapes: THREE.Object3D[] = [];

    {
      const g = new THREE.TorusKnotGeometry(5.2, 1.5, 120, 20);
      const mesh = new THREE.LineLoop(g, wireMat);
      mesh.position.set(-12, 4, -6);
      scene.add(mesh);
      shapes.push(mesh);
    }
    {
      const g = new THREE.IcosahedronGeometry(2.8, 0);
      const edges = new THREE.EdgesGeometry(g);
      const mesh = new THREE.LineSegments(edges, wireMat);
      mesh.position.set(14, -6, -8);
      scene.add(mesh);
      shapes.push(mesh);
    }
    {
      const g = new THREE.OctahedronGeometry(3.4, 0);
      const edges = new THREE.EdgesGeometry(g);
      const mesh = new THREE.LineSegments(edges, wireMat);
      mesh.position.set(0, 13, -4);
      scene.add(mesh);
      shapes.push(mesh);
    }

    const mouse = { x: 0, y: 0 };
    let t = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = reducedMotion ? 0.002 : 0.008;

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += speed;

      particleSystem.rotation.y = t * 0.05;
      particleSystem.rotation.x = Math.sin(t * 0.02) * 0.1;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const phase = phases[i];
        const pulse = Math.sin(t * 0.5 + phase) * 0.04 + 1;
        geometry.attributes.position.setXYZ(
          i,
          positions[i3] * pulse,
          positions[i3 + 1] * pulse,
          positions[i3 + 2] * pulse
        );
      }
      geometry.attributes.position.needsUpdate = true;

      shapes.forEach((s, i) => {
        s.rotation.x = t * (0.15 + i * 0.05);
        s.rotation.y = t * (0.12 + i * 0.04);
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      wireMat.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
