import * as React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen=({navigation})=> {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>DetailScreen</Text>
    <Button
     title ="Go Back"
     onPress={()=>navigation.goBack()} />
    </View>
    )
    
    }
    export default DetailScreen ;