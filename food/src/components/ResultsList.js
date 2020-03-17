import React from 'react' 
import {View,StyleSheet,FlatList,Text, TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'


const ResultsList = ({title,results,navigation}) =>{
    if(!results.length){
        return null
    }

    return (
        <View style={{marginLeft:10,marginBottom:10}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                        <ResultDetail 
                            result={item}
                        />
                        </TouchableOpacity>
                    )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    }
})


export default withNavigation(ResultsList);