import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import useDimensionStore from '../store/store';


// Create styles
const styles = StyleSheet.create({
    page: {

       
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
      
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = ({data}) => {
return ( 



    <Document>

        <Page size="A4" style={styles.page} width={"10%"} >
        
            <View style={styles.section}>
            
            {data&& data.map(s=>
            <Image src={s}/>

            )}
               
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
        
    </Document>  
    )}
  
    


  
export default MyDocument;