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
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#E96E6E',
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <EntypoIcon name={'home'} size={size} color={color} />
            );
          },
        }}/>
        <Tab.Screen name="Reorder" component={ReorderScreen} options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <FontAwesomeIcon name={'reorder'} size={size} color={color} />
            );
          },
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <EntypoIcon name={'shopping-cart'} size={size} color={color} />
            );
          },
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <MaterialIcon name={'account'} size={size} color={color} />
            );
          },
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
