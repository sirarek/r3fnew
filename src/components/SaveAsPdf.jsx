import useDimensionStore from "../store/store"

 const SaveAsPdf = props=>{
    const setShowPdf = useDimensionStore(state=>state.setShowPdf)
    return <button onClick={()=>setShowPdf(true)} className="save-as-pdf"> Save as PDF</button>
}

export default SaveAsPdf