import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Searchbar from './components/Searchbar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';


const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsbyPrice=(price)=>{
    return results.filter(result=>{
      return result.price==price;
    });

 };

  return (
    <>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList navigation={navigation} results ={filterResultsbyPrice('$')} title="Cost Effective" />
      <ResultsList navigation={navigation}  results = {filterResultsbyPrice('$$')} title="Bit Pricier" />
      <ResultsList navigation={navigation} results = {filterResultsbyPrice('$$$')} title="Big Spender" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

