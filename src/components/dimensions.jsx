import useDimensionStore from "../store/store";

const DimensionsInput = (props) => {
  const updateX = useDimensionStore((state) => state.changeX);
  const updateY = useDimensionStore((state) => state.changeY);
  const updateThichkness = useDimensionStore((state) => state.changeThickness);
  const x = useDimensionStore((state) => state.floorX);
  const y = useDimensionStore((state) => state.floorY);
  const thickness = useDimensionStore((state) => state.thickness);



  const inputHandler = () => {
    updateX(
      document.getElementById("floorWidth").value < 1
        ? 1
        : document.getElementById("floorWidth").value
    );
    updateY(
      document.getElementById("floorHeight").value < 1
        ? 1
        : document.getElementById("floorHeight").value
    );
    return props.handler({
      x:
        document.getElementById("floorWidth").value < 1
          ? 1
          : document.getElementById("floorWidth").value,
      y:
        document.getElementById("floorHeight").value < 1
          ? 1
          : document.getElementById("floorHeight").value,
    });
  };

  return (
    <div className="dimensions_input">
      <label htmlFor="width">Width</label>
      <input
        onChange={inputHandler}
        type="number"
        id="floorWidth"
        name="width"
        min="1"
        max="100"
        value={x}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        id="floorHeight"
        name="height"
        min="1"
        max="100"
        value={y}
        onChange={inputHandler}
      />
    </div>
  );
};
export default DimensionsInput;
