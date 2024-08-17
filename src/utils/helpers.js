import {GLTFExporter} from "three/examples/jsm/exporters/GLTFExporter";

export const sendScreenshot = (threState,addScreenshot)=>{
        const screenshotObject = {
                id: crypto.randomUUID(),
                src: "",
                w:"",
                l:""
        }
        const xgl = threState.gl;
        threState.setSizeOverride(500, 500, 1);
        xgl.render(threState.scene, threState.camera);

        //TODO: fix the geometry source

        const {height,width} =threState.scene.children.find(g=>g.name ==="room").children[0].children[0]["geometry"]["parameters"]
        const screenshot = xgl.domElement.toDataURL('image/png');
        screenshotObject["src"] = screenshot;
        screenshotObject["w"] = width;
        screenshotObject["l"] = height;
        addScreenshot(screenshotObject)
        threState.setSizeOverride(window.haxyPaxy.w,window.haxyPaxy.h)

        window.postMessage({screenshotData: screenshot});
}


export const handleMessageExport =(threeState)=>{
        const exporter = new GLTFExporter();
        exporter.parse(threeState.scene,(gltf)=> save(new Blob([gltf],{type:"application/octet-stream"}),'scene.glb'), ()=>console.log("error in glb"),
        {binary:true})
}

function save(blob, filename ) {
        const link = document.createElement('a');
        link.style.display = 'none';
        document.body.append(link)

        link.href = URL.createObjectURL( blob );
        link.download = filename;
        link.click();
}


