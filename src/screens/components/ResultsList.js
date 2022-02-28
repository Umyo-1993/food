import React from "react";
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation" ;
import ResultsDetails from "./ResultsDetails";


/* const ResultsList=({title})=>
{
    return (<View>
        <Text>
            {title}
        </Text>
         
           </View>);

};*/

const ResultsList = ({ title , results, navigation}) => {
    return (
      <View>
        
        <Text style={styles.title}>{title}</Text>
       
        <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
        // return <Text>{item.name}</Text>;

          return(
            <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id : item.id})}>
            <ResultsDetails result={item}/>
            </TouchableOpacity>
            
           )
        }}
      />
       
        
            

      </View>
    );
  }; 
  const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
// const styles=StyleSheet.create({});
export default withNavigation(ResultsList);



