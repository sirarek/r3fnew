import {Button} from "@mui/material";
import pdfFonts from "./fonts";
import pdfMake from 'pdfmake';
import useDimensionStore from "../store/store";


const Pdfv2 = props => {
    const screenshotList = useDimensionStore(state => state.screenShots);
    pdfMake.vfs = pdfFonts

    const handlePdfDonwload = () => {
        const sampleText = ``


        const photosAndTables = []
        screenshotList.forEach(img => {
            const sampleText = `To skromne pomieszczenie o wymiarach ${img.l}x${img.w} metry jest funkcjonalną przestrzenią, pełniącą rolę jako cela w więzieniu. Ściany wykonane są z solidnego betonu, jednolite i nieozdobione, o neutralnym szarym kolorze. Jedno małe okno z kratami zapewnia minimalną ilość naturalnego światła i ograniczony widok na zewnętrzny mur. Podłoga wykonana jest z solidnego betonu lub płytek, łatwa do utrzymania w czystości.`
            const sampleText2 = `Dzięki ${img.l}x${img.w} metrycznym wymiarom, pokój oferuje elastyczność w aranżacji i wykorzystaniu przestrzeni. Świetlna atmosfera pomieszczenia sprzyja koncentracji i relaksowi. Praktyczne oświetlenie dostosowane jest do różnych potrzeb użytkowników.Całość urządzenia utrzymana jest w minimalistycznym stylu, co nadaje wnętrzu nowoczesny i spokojny charakter.`
            photosAndTables.push({image: img.src, width: 500, height: 500})
            photosAndTables.push("Room dimensions")
            // photosAndTables.push({text: `length: ${img.l}`})
            // photosAndTables.push({text: `width: ${img.w}`})
            photosAndTables.push({
                table: {
                    body: [
                        ["width", "length"],
                        [img.w, img.l]
                    ]
                }
            })
            photosAndTables.push({
                alignment:"justify",
                columns: [


                    {
                        margin: [5, 10, 25, 0],
                        text: sampleText
                    },
                    {
                        margin: [5, 10, 35, 0],
                        text: sampleText2
                    }
                ]
            })


        })

        var docDefinition = {content: ['Cela+', ...photosAndTables]}
        pdfMake.createPdf(docDefinition).download();
    }
    return (
        <Button onClick={handlePdfDonwload}> Save As PDF v2</Button>
    )
}

export default Pdfv2