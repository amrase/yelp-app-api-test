import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) =>{
    const [result,setResult] = useState([])
    const id = navigation.getParam('id')
    
    console.log(result)

    const getSingleResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
       getSingleResult(id)
    }, [])


    return (
        <View>
        <Text>ResultsShowScreen</Text>
    </View>
)}

const styles = StyleSheet.create({})

export default ResultsShowScreen


