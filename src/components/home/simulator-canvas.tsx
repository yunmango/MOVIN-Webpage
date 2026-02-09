"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";

interface SimulatorCanvasProps {
  trackers: number;
  width: number;
  depth: number;
  height: number;
}

function CaptureZone({
  width,
  depth,
  height,
}: {
  width: number;
  depth: number;
  height: number;
}) {
  return (
    <mesh position={[0, height / 2, 0]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color="#4ade80"
        transparent
        opacity={0.08}
        wireframe={false}
      />
    </mesh>
  );
}

function Tracker({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.1, 0.15, 0.3, 8]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function TrackerPositions({
  count,
  width,
  depth,
  height,
}: {
  count: number;
  width: number;
  depth: number;
  height: number;
}) {
  const positions: [number, number, number][] = [];
  if (count >= 1) positions.push([0, height, -depth / 2]);
  if (count >= 2) positions.push([0, height, depth / 2]);
  if (count >= 3) positions.push([-width / 2, height, 0]);
  if (count >= 4) positions.push([width / 2, height, 0]);

  return (
    <>
      {positions.map((pos, i) => (
        <Tracker key={i} position={pos} />
      ))}
    </>
  );
}

export default function SimulatorCanvas({
  trackers,
  width,
  depth,
  height,
}: SimulatorCanvasProps) {
  return (
    <Canvas
      camera={{ position: [6, 5, 6], fov: 50 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Grid
        args={[20, 20]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#333"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#555"
        fadeDistance={20}
        infiniteGrid
      />
      <CaptureZone width={width} depth={depth} height={height} />
      <TrackerPositions
        count={trackers}
        width={width}
        depth={depth}
        height={height}
      />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
