import React  from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetails=({result})=>{
    return (<View>
        <Image style={styles.image}source={{uri : result.image_url}}/>      
        <Text style={styles.name}>{result.name}</Text>
       <Text >{result.rating} Star  {result.review_count} Review </Text>
         

    </View>);


};

const styles = StyleSheet.create({
    image : {

        width :200,
        borderRadius: 4,
        height : 200

    },
    name :{
        fontWeight : 'bold'

    }

});

export default ResultsDetails;