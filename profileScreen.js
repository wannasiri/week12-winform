import * as React from 'react';
import { View, Text, Button } from 'react-native';

const profileScreen=({navigation})=> {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>profileScreen</Text>
    <Button
     title ='Go to HomeScreen'
     onPress={()=>navigation.navigate('Home')} />
    </View>
    )
    
    }
    export default profileScreen ;