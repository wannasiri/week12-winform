import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Home Screen</Text>
      <Button 
      title ="Go to DetailScreen"
      onPress={()=>navigation.navigate('Detail')} />
      </View>
      
    )
  }
  export default HomeScreen ;