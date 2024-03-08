import { BoxGeometry } from "three";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
const Door = (props) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const springs = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  const { rotation } = useSpring({
    from: {
      rotation: 0,
    },
    to: {
      rotation: open ? -Math.PI : 0,
    },

    config: {},
  });
  const { position } = useSpring({
    from: {
      position: 0,
    },
    to: {
      position: open ? 0 + props.geo[1] : 0,
    },
  });
  const { positionz } = useSpring({
    from: {
      positionz: 0,
    },
    to: {
      positionz: open ? 0.2 + props.geo[2] : 0,
    },
  });
  return (
    <animated.mesh
      scale={springs.scale}
      position={props.position}
      position-y={position}
      rotation-x={rotation}
      position-z={positionz}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
        console.log(e);
        console.log(active);
        console.log(props.position);
        // setActive(!active);
      }}
    >
      <boxGeometry args={props.geo} />

      <meshPhysicalMaterial
        animated
        transparent
        transmission={0.7}
        color={0xaac8e6}
        roughness={0.5}
      />
    </animated.mesh>
  );
};
export default Door;
