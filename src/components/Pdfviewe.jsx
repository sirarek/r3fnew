import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./pdf";
import useDimensionStore from '../store/store';

 const PdfView = () =>   {
    const showPdf = useDimensionStore(state=>state.showPdf)
    const setShowPdf = useDimensionStore(state=>state.setShowPdf)
return (
   
    <div className='ell' style={{display:showPdf?"block":"none"}}>
 <div className="popup-overlay">
          <div className="popup">
        
       <div className='pdf-buttons-wrapper'>
    <PDFViewer width={500} height={400}>
        <MyDocument />
    </PDFViewer>
    <button onClick={()=>setShowPdf(false)}>Close</button>
    </div>
    </div>
    
        </div>
        
    </div>
   
)};

export  default PdfView