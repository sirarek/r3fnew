import {
    Vector3,
    CatmullRomCurve3,
    DoubleSide,
    ShapeGeometry,

    Shape,
} from "three";
import {useEffect, useRef} from "react";
import useDimensionStore from "../store/store.js";

export default function Extrusion() {
    const legHeight = useDimensionStore((state) => state.legHeight);
    const shapeRef = useRef();
    const shapeBotomRef = useRef();
    const rectShape = new Shape();
    rectShape.moveTo(0, 0); // Start at (0, 0)
    rectShape.lineTo(0.1, 0); // Draw line to (2, 0)
    rectShape.lineTo(0.1, 0.1); // Draw line to (2, 1)
    rectShape.lineTo(0, 0.1); // Draw line to (0, 1)
    rectShape.lineTo(0, 0);


    useEffect(() => {
        const shape = new Shape();
        const x = 0
        const y = 1

        shape.moveTo(0, 0)
        // shape.lineTo(x,y);
        // shape.lineTo(y,y+x);
        // shape.lineTo(y,x);
        shape.bezierCurveTo(x, y, x, y, y, y)
        shape.bezierCurveTo(y, x, y, x, x, x)
        const bshape = new Shape();
        const x1 = 0
        const y1 = 0.5

        bshape.moveTo(0, 0)
        bshape.lineTo(x1, y1);
        bshape.lineTo(y1, y1 + x1);
        bshape.lineTo(y1, x1);


        const hole = new Shape();
        hole.moveTo(0.2, 0.2)
        hole.lineTo(0.2, 0.3);
        hole.lineTo(0.3, 0.3);
        hole.lineTo(0.3, 0.2);

        shape.holes.push(hole)
        shapeRef.current = shape;

        shapeBotomRef.current = bshape;
    }, [])

    const extrudeSettings = {
        bevelEnabled: false,
        depth: 0.04,
    }

    const extrudeSettingsLeg = {
        bevelEnabled: false,
        depth: legHeight,
    }
    const curveData = [
        new Vector3(0.25, 0.25, 0.0),
        new Vector3(0.2, 0.0, 0.2),
        new Vector3(0.0, 0.0, 0.2),
        new Vector3(0.0, 0.2, legHeight)]
    const curve = new CatmullRomCurve3(curveData);

    return (

        <group rotation={[Math.PI / 2, 0, 0]} position={[0, legHeight, 0]}>
            <mesh>

                <extrudeGeometry args={[shapeRef.current, extrudeSettings]}/>
                <meshStandardMaterial
                    color="darkOrange"
                    side={DoubleSide}
                />
            </mesh>
            <mesh position={[0.5, 0.5, 0]}>

                <extrudeGeometry args={[rectShape, extrudeSettingsLeg]}/>
                <meshStandardMaterial
                    color="darkOrange"
                    side={DoubleSide}
                />
            </mesh>

            <mesh>
                <meshStandardMaterial
                    color="darkOrange"
                    side={DoubleSide}
                />
                <tubeGeometry args={[curve, 100, 0.01, 12, false]}/>
            </mesh>


        </group>

    );
}