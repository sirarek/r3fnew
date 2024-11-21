import {
    Vector3,
    CatmullRomCurve3,
    DoubleSide,
    ShapeGeometry,

    Shape,
} from "three";
import {useEffect,useRef} from "react";

export default function Extrusion() {
const shapeRef = useRef();
    useEffect(()=>{
        const shape = new Shape();
        const x =0
        const y =1

        shape.moveTo(0,0)
        shape.lineTo(x,y);
        shape.lineTo(y,y+x);
        shape.lineTo(y,x);











    const hole = new Shape();
        hole.moveTo(0.2, 0.2)
        hole.lineTo(0.2, 0.3);
        hole.lineTo(0.3, 0.3);
        hole.lineTo(0.3, 0.2);






        shape.holes.push(hole)
    shapeRef.current = shape;


    },[])

    const extrudeSettings  = {
      bevelEnabled: true,
        depth:0.0001





    }


    return (

<group>
                <mesh position={[0, 0.6, 0]} rotation={[Math.PI/2,0,0]}>

                    <extrudeGeometry args={[shapeRef.current,extrudeSettings]} />
                    <meshStandardMaterial
                        color="darkBlue"
                        side={DoubleSide}
                    />
                </mesh>

</group>

    );
}