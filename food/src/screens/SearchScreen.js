import React,{useState} from 'react'
import {StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = ({navigation}) =>{


    const [term,setTerm] = useState('')
    const [searchApi,results] = useResults();
    
    const filterResultByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price
        })
    }
    console.log(term)

    return (
        <>
        <SearchBar
             term={term} 
             onTermChange={setTerm}
             onTermSubmit={()=>searchApi(term)}
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


