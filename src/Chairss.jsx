import useDimensionStore from "./store/store";
import Chair from "./Chair";
import React, {Suspense} from "react";

const Chairss = () => {
  const chairs = useDimensionStore((state) => state.chairs);

  return chairs.map((el, i) => {

    return (
      <Suspense>

      <Chair position={el.position} id={el.id}  key={i} type={el.type}></Chair>
      </Suspense>

    );
  });
};

export default Chairss;
