import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from '@pages/Orders';
import Delivery from '@pages/Delivery';
import Settings from '@pages/Settings';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LoggedIn = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{title: '오더 목록'}}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: '내정보'}}
      />
    </Tab.Navigator>
  );
};

const LoggedOut = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: '회원가입'}}
      />
    </Stack.Navigator>
  );
};

function App() {
  const [isLoggedin, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedin ? <LoggedIn /> : <LoggedOut />}
    </NavigationContainer>
  );
}
export default App;
