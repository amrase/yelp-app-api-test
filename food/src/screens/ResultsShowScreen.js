import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet, FlatList,Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) =>{
    const [result,setResult] = useState([])
    const id = navigation.getParam('id')


    if(!result){
        return null;
    }
    

    const getSingleResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
       getSingleResult(id)
    }, [])


    return (
        <View>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item})=>{
                return <Image source ={{uri :item}} style={styles.image}/>
            }}
        />
    </View>
)}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})

export default ResultsShowScreen
 

