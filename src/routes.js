import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';
import camera from './assets/camera.png';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
            headerBackTitle: null
        }}
        mode="modal"
      >
        <Stack.Screen name="Feed" component={Feed} options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
                <Image source={camera} />
            </TouchableOpacity>
        ),
        })}/>
        <Stack.Screen name="New" component={New} options={{
          headerTitle: "Nova publicação"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;