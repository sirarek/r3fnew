import { Line, Text } from "@react-three/drei";
import { useRef } from "react";
import useDimensionStore from "../store/store";

const Mline = (props) => {
  const floorX = useDimensionStore((state) => state.floorX);
  const floorY = useDimensionStore((state) => state.floorY);
  const ref = useRef();
  return (
    <>
      <group>
        <Line
          points={[
            [-floorX / 2, 0, floorY / 2 + 1],
            [-floorX / 2 + 0.2, 0, floorY / 2 + 1.2],
            [-floorX / 2 + 0.2, 0, floorY / 2 + 0.8],
            [-floorX / 2, 0, floorY / 2 + 1],
            [-floorX / 2, 0, floorY / 2 + 1],
            [ floorX / 2, 0, floorY / 2 + 1],
            [ floorX / 2, 0, floorY / 2 + 1],
            [ floorX / 2 - 0.2, 0, floorY / 2 + 1.2],
            [ floorX / 2 - 0.2, 0, floorY / 2 + 0.8],
            [ floorX / 2, 0, floorY / 2 + 1],
          ]}
          color="black"
          lineWidth={3}
          segments
        />
        <Text
          position={[0, 0, floorY / 2 + 1.3 ]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          color="red"
          scale={0.7}
        >
          {`${floorX}m`}
        </Text>
      </group>

      <group>
        <Line
          points={[
            [-floorX / 2 - 1, 0, floorY / 2],
            [-floorX / 2 - 1.2, 0, floorY / 2 - 0.2],
            [-floorX / 2 - 0.8, 0, floorY / 2 - 0.2],
            [-floorX / 2 - 1, 0, floorY / 2],
            [-floorX / 2 - 1, 0, floorY / 2],
            [-floorX / 2 - 1, 0, -floorY / 2],
            [-floorX / 2 - 1, 0, -floorY / 2],
            [-floorX / 2 - 1.2, 0, -floorY / 2 + 0.2],
            [-floorX / 2 - 0.8, 0, -floorY / 2 + 0.2],
            [-floorX / 2 - 1, 0, -floorY / 2],
          ]}
          color="black"
          lineWidth={3}
          segments
        ></Line>
        <Text
          position={[-(floorX / 2) - 1.3, 0, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          color="yellow"
          scale={0.7}
          
        >
    {`${floorY}m`}
        </Text>
      </group>
    </>
  );
};
export default Mline;
