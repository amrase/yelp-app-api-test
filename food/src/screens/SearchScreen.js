import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'


const SearchScreen = () =>{

    const [term,setTerm] = useState('')
    const [results,setResults] = useState([]);
    // const [errorMessage,setErrorMessage] = useState('')


    // useEffect(() => {
    //     searchApi()
    // }, [])

    //helper function
    const searchApi = async () =>{
        try {
       const response = await yelp.get('/search',{
           params: {
                limit:50,
                term,
                location: 'New York'
           }
       });
       setResults(response.data.businesses)
        }
        catch(e){
            alert('Something went wrong')
        }
    }

    return <View>
        <SearchBar
             term={term} 
             onTermChange={(newTerm)=>setTerm(newTerm)}
             onTermSubmit={()=>searchApi()}
         />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen


