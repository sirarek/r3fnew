import {Button} from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Pdfv2 = props => {
    const handlePdfDonwload = () => {


        var docDefinition = {content: 'This is an sample PDF printed with pdfMake'};

        pdfMake.createPdf(docDefinition).download();
    }
    return (
        <Button onClick={handlePdfDonwload}> Siema</Button>
    )

}

export default Pdfv2