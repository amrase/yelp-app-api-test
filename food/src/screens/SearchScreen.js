import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () =>{
    const [term,setTerm] = useState('')

    console.log(term)

    return <View>
        <SearchBar
             term={term} 
             onTermChange={(newTerm)=>setTerm(newTerm)}
             onTermSubmit={()=>console.log('On term submit!')}
         />
        <Text>Search Screen</Text>
        <Text>{term}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen


