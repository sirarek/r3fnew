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
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
});

// Create Document Component
const MyDocument = ({data}) => {
return ( 



    <Document>

        <Page size="A4" style={styles.page}  >
       
        
            <View style={styles.section}>
            <Text style={styles.header} fixed>
       Cela +
      </Text>
            
            {data&& data.map((s,i)=>
            <Image src={s} key={i}/>

            )}
               
            </View>
        
        </Page>
        
    </Document>  
    )}
  
    


  
export default MyDocument;