
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Game: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeZone, setActiveZone] = useState<number>(2); // 1: Edu, 2: Skills, 3: Projects

  useEffect(() => {
    if (!mountRef.current) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Initial Camera Position
    camera.position.set(0, 10, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0x3b82f6, 2);
    spotLight.position.set(0, 20, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    scene.add(spotLight);

    // --- OBJECTS (PODIUMS) ---
    const podiums: THREE.Group[] = [];
    const zones = [
      { id: 1, name: "PARCOURS", color: 0x3b82f6, x: -35, refId: 'education' },
      { id: 2, name: "ARSENAL", color: 0xa855f7, x: 0, refId: 'skills' },
      { id: 3, name: "PROJETS", color: 0xef4444, x: 35, refId: 'projects' }
    ];

    zones.forEach((zone) => {
      const group = new THREE.Group();
      group.position.x = zone.x;
      
      // Base
      const geometry = new THREE.CylinderGeometry(4, 5, 1, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x1e293b, 
        specular: 0x111111,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });
      const base = new THREE.Mesh(geometry, material);
      group.add(base);

      // Glowing Ring
      const ringGeo = new THREE.TorusGeometry(4.5, 0.1, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color: zone.color });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.5;
      group.add(ring);

      // Holographic Beam
      const beamGeo = new THREE.CylinderGeometry(3, 3, 20, 32, 1, true);
      const beamMat = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(zone.color) },
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
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          void main() {
            float alpha = (1.0 - vUv.y) * 0.3;
            float scanline = sin(vUv.y * 50.0 - time * 5.0) * 0.1;
            gl_FragColor = vec4(color, alpha + scanline);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.y = 10;
      // Save reference to update time uniform
      beam.userData = { isBeam: true, material: beamMat };
      group.add(beam);

      // Floating Cube (Symbol)
      const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
      const cubeMat = new THREE.MeshBasicMaterial({ wireframe: true, color: zone.color });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.y = 6;
      cube.userData = { isRotator: true, speed: Math.random() * 0.02 + 0.01 };
      group.add(cube);

      scene.add(group);
      podiums.push(group);
    });

    // --- PARTICLES ---
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);


    // --- RAYCASTER (Interaction) ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onClick = () => {
       // Logic to navigate to section could be here
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate Podiums
      podiums.forEach((group, index) => {
        // Rotate Cube
        const cube = group.children.find(c => c.userData.isRotator);
        if (cube) {
           cube.rotation.x += cube.userData.speed;
           cube.rotation.y += cube.userData.speed;
        }

        // Animate Beam Shader
        const beam = group.children.find(c => c.userData.isBeam);
        if (beam) {
           const beamMesh = beam as THREE.Mesh;
           if (beamMesh.material instanceof THREE.ShaderMaterial) {
             beamMesh.material.uniforms.time.value = elapsedTime;
           }
        }
      });

      // Move Camera smoothly based on Active Zone
      const targetX = zones.find(z => z.id === activeZone)?.x || 0;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.lookAt(targetX * 0.5, 5, 0); // Look slightly ahead of the podium

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- RESIZE ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeZone]);

  return (
    <section className="relative h-[600px] bg-black overflow-hidden border-y border-slate-900">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8">
        <div className="text-center">
           <h2 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase drop-shadow-lg">
              Hub Holographique
           </h2>
           <p className="text-blue-400 text-xs font-mono mt-2">
              Veuillez sélectionner un module de données
           </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 pointer-events-auto">
           {[
             { id: 1, label: 'EDUCATION' },
             { id: 2, label: 'SKILLS' },
             { id: 3, label: 'PROJETS' }
           ].map(btn => (
             <button
               key={btn.id}
               onClick={() => setActiveZone(btn.id)}
               className={`
                 px-6 py-3 rounded-none border-b-2 text-sm font-bold tracking-wider transition-all
                 ${activeZone === btn.id 
                   ? 'border-blue-500 text-white bg-blue-900/20' 
                   : 'border-slate-700 text-slate-500 hover:text-slate-300'}
               `}
             >
               {btn.label}
             </button>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Game;
