import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";

type OrbitControlsType = typeof OrbitControls;

const Three: FC = () => {
  const orbitControlsRef = useRef<OrbitControlsType | null>(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    if (!!orbitControlsRef.current) console.log(orbitControlsRef.current);
  }, [orbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        autoRotate={true}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />

      <mesh position={[0, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f3f3f3" />
      </mesh>

      <spotLight position={[2, 2, 0]} args={["#D019B9", 3, 6, 0.5, 0.4, 5]} />
    </>
  );
};

export default Three;
