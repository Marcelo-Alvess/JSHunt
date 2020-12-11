import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Main from '../pages/Main';
import Product from '../pages/Product';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Main"
          component={Main}
          options={{ 
            headerShown: true,
            title: "JShunt",
            headerTitleStyle: { alignSelf: 'center' },
            headerStyle: { backgroundColor: "#DA5527" },
            headerTintColor: "#FFF",
          }}
        />

        <Screen 
          name="Product"
          component={Product}
          options={{ 
            headerShown: true,
            title: "Product",
            headerTitleStyle: { alignSelf: 'center' },
            headerStyle: { backgroundColor: "#DA5527" },
            headerTintColor: "#FFF",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}