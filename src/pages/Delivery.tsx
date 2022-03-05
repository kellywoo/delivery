import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Processing from '@pages/Processing';
import Complete from '@pages/Complete';

const Stack = createNativeStackNavigator();
function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Processing">
      <Stack.Screen
        name="Processing"
        component={Processing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Delivery;
