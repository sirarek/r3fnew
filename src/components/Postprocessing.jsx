import { BlendFunction, OverrideMaterialManager } from "postprocessing";
import { HalfFloatType } from "three";
import {
  Bloom,
  SSAO,
  EffectComposer,
  SelectiveBloom,
} from "@react-three/postprocessing";
function Postprocessing() {
  // OverrideMaterialManager.workaroundEnabled = true;

  return (
    <>
      {/* <EffectComposer multisampling={6} frameBufferType={HalfFloatType}> */}
      {/* <Bloom mipmapBlur luminanceThreshold={1} levels={8} /> */}
      {/* /<SSAO
          blendFunction={BlendFunction.MULTIPLY} // blend mode
          samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
          rings={4} // amount of rings in the occlusion sampling pattern
          distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
          distanceFalloff={0.0} // distance falloff. min: 0, max: 1
          rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
          rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
          luminanceInfluence={0.5} // how much the luminance of the scene influences the ambient occlusion
          radius={0.1} // occlusion sampling radius
          scale={0.5} // scale of the ambient occlusion
          bias={0.5} // occlusion bias
          intensity={20}
          color="black"
          depthAwareUpsampling={true}
        /> */}
      {/* </EffectComposer> */}
    </>
  );
}

export default Postprocessing;
