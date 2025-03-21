'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { useLoader } from '@react-three/fiber';
import gsap from 'gsap';

const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const Particles = ({ svgUrl, setState }) => {
  const particlesRef = useRef();
  const { viewport } = useThree();
  const numParticles = 5500;
  const textPositionsRef = useRef(new Float32Array(numParticles * 3));

  const getScrollProgress = () => easeInOutQuad(window.scrollY / (document.body.scrollHeight - window.innerHeight));

  useEffect(() => {
    setState((prev) => ({ ...prev, scrollProgress: getScrollProgress() }));

    const handleScroll = () => {
      const progress = getScrollProgress();
      setState((prev) => ({
        ...prev,
        scrollProgress: progress,
        animationComplete: progress === 1,
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setState]);

  const svgData = useLoader(SVGLoader, svgUrl);
  const [particleColor, setParticleColor] = useState('#ffffff');

  useEffect(() => {
    if (!svgData) return;

    let extractedColor = null;
    const shapes = svgData.paths.flatMap((path) => {
      let fillColor = path.userData.style.fill;
      let strokeColor = path.userData.style.stroke;

      if (fillColor && fillColor !== 'none') {
        extractedColor = new THREE.Color(fillColor).getStyle();
      } else if (strokeColor && strokeColor !== 'none') {
        extractedColor = new THREE.Color(strokeColor).getStyle();
      }

      return path.toShapes(true);
    });

    if (extractedColor) setParticleColor(extractedColor);

    let vertices = [];
    let totalPoints = 0;
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;

    shapes.forEach((shape) => (totalPoints += shape.getLength()));

    shapes.forEach((shape) => {
      const shapeLength = shape.getLength();
      const pointsNeeded = Math.max(20, Math.floor((shapeLength / totalPoints) * numParticles));
      const points = shape.getSpacedPoints(pointsNeeded);

      points.forEach((point) => {
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        minY = Math.min(minY, point.y);
        maxY = Math.max(maxY, point.y);
      });

      vertices.push(...points.map((p) => [p.x, p.y, 0]));
    });

    while (vertices.length < numParticles) {
      const randX = THREE.MathUtils.lerp(minX, maxX, Math.random());
      const randY = THREE.MathUtils.lerp(minY, maxY, Math.random());
      vertices.push([randX, randY, 0]);
    }

    const svgWidth = maxX - minX;
    const svgHeight = maxY - minY;
    const svgAspectRatio = svgWidth / svgHeight;
    const viewportAspectRatio = viewport.width / viewport.height;
    const scaleFactor = svgAspectRatio > viewportAspectRatio ? (viewport.width * 0.9) / svgWidth : (viewport.height * 0.9) / svgHeight;

    vertices = vertices.map(([x, y, z]) => [(x - minX - svgWidth / 2) * scaleFactor, -(y - minY - svgHeight / 2) * scaleFactor, z]);

    const tempPositions = new Float32Array(numParticles * 3);
    for (let i = 0; i < numParticles; i++) {
      const index = i % vertices.length;
      tempPositions[i * 3] = vertices[index][0] || 0;
      tempPositions[i * 3 + 1] = vertices[index][1] || 0;
      tempPositions[i * 3 + 2] = vertices[index][2] || 0;
    }

    textPositionsRef.current = tempPositions;
  }, [svgData, viewport]);

  const initialPositions = useMemo(() => {
    const positions = new Float32Array(numParticles * 3);
    for (let i = 0; i < numParticles * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (!particlesRef.current || !textPositionsRef.current.length) return;

    const positionsArray = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positionsArray.length; i++) {
      positionsArray[i] = THREE.MathUtils.lerp(initialPositions[i], textPositionsRef.current[i] || 0, getScrollProgress());
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" array={new Float32Array(initialPositions)} count={numParticles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial attach="material" color={particleColor} size={0.08} opacity={0.9} transparent />
    </points>
  );
};

export default function ParticleCanvas() {
  const [state, setState] = useState({ scrollProgress: 0, animationComplete: false });
  const overlayRef = useRef(null);

  useEffect(() => {
    if (state.animationComplete) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 1.5 });
    }
  }, [state.animationComplete]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles svgUrl="/images/screen.svg" setState={setState} />
      </Canvas>

      <div ref={overlayRef} className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center opacity-0">
        <h1 className="text-white text-4xl font-bold">Animation Complete</h1>
      </div>
    </div>
  );
}
