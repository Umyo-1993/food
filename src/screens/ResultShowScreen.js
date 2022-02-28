import React ,{useEffect} from 'react';
import { View, Image, Text, StyleSheet,FlatList } from 'react-native';
import yelp from '../api/yelp';
import { useState } from 'react/cjs/react.development';


const ResultShowScreen=({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
  
    console.log(result);
  
    const getResult = async id => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };
    useEffect(() => {
      getResult(id);
    }, []);
    if(!result)
    {
  return null;
    }
    return (
     
    <View>
    <Text>{result.name}</Text>
    <FlatList
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />;
      }}
    />
  </View>

  
    );


};

const styles = StyleSheet.create({
  image :{
    height :200,
    width : 300
  }

});

export default ResultShowScreen;