import React,{useState} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = ({navigation}) =>{
    console.log(navigation.navigate)

    const [term,setTerm] = useState('')
    const [searchApi,results] = useResults();
    
    const filterResultByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price
        })
    }

    return (
        <>
        <SearchBar
             term={term} 
             onTermChange={(newTerm)=>setTerm(newTerm)}
             onTermSubmit={(newTerm)=>searchApi(newTerm)}
         />
         <ScrollView>
        <ResultsList
             title="Cost Effective" 
             results={filterResultByPrice('$')}
             navigation={navigation}
        />
        <ResultsList 
            title="Bit Pricier" 
            results={filterResultByPrice('$$')}
        /> 
        <ResultsList
             title="Big Spender" 
            results={filterResultByPrice('$$$')}
        />
        <ResultsList 
            title="Big Spender" 
            results={filterResultByPrice('$$$$')}
        />
        </ScrollView>
    </>
)}

const styles = StyleSheet.create({})

export default SearchScreen


