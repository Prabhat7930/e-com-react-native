import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { ReorderScreen } from './src/screens/ReorderScreen';
import { CartScreen } from './src/screens/CartScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => {
            return(
              <EntypoIcon name={'home'} size={25} color={'#000000'} />
            );
          },
        }}/>
        <Tab.Screen name="Reorder" component={ReorderScreen} options={{
          tabBarIcon: () => {
            return(
              <FontAwesomeIcon name={'reorder'} size={25} color={'#000000'} />
            );
          },
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: () => {
            return (
              <EntypoIcon name={'shopping-cart'} size={25} color={'#000000'} />
            );
          },
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: () => {
            return(
              <MaterialIcon name={'account'} size={25} color={'#000000'} />
            );
          },
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
