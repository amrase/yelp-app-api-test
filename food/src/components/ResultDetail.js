import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const ResultDetail  = ({result}) =>{
    return (
        <View style={styles.container}>
            <Image source={{uri : result.image_url}} style={styles.image}/>
            <Text style={styles.name }>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    image:{
        width:250,
        height:150,
        borderRadius:5,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:5
    }
})

export default ResultDetail