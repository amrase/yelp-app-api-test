import React from 'react' 
import {View,StyleSheet,FlatList,Text} from 'react-native'
import ResultDetail from './ResultDetail'

const ResultsList = ({title,results,navigation}) =>{
    return (
        <View style={{marginLeft:10,marginBottom:10}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.id}
                renderItem={({item})=>{
                    return (<View>
                        <ResultDetail 
                            result={item}
                        
                        />
                    </View>
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


export default ResultsList