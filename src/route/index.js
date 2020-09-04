import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactList, ContactDetail, ContactForm} from '../pages';


const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function Route() {
  return (
    <Stack.Navigator
      initialRouteName={ContactList}
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen
        name="Contact List"
        component={ContactList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact Detail"
        component={ContactDetail}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="Contact Form"
        component={ContactForm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Route;
