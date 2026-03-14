import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 1 + Math.random() * 0.3, // units per second
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [count, particles]);

  useFrame((_, delta) => {
    if (!mesh.current) return;

    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= particles[i].speed * delta;

      if (pos[i * 3 + 1] < -2) {
        pos[i * 3] = (Math.random() - 0.5) * 10;
        pos[i * 3 + 1] = Math.random() * 10 + 5;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;