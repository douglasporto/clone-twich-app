import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from './page/Following';
import ComingSoon from './page/ComingSoon';

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from './styles/colors'

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator tabBarOptions={{
      style: {
        height: 80,
        backgroundColor: colors.primary,
        borderTopWidth: 0
      },
      tabStyle: {
        alignItems:'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 25,
        height: 25
      },
      labelStyle: {
        fontFamily: 'roboto_400',
        fontSize: 11,
        marginTop: 5,
      },
      inactiveTintColor: colors.black,
      activeTintColor: colors.purple
    }}>
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name="Browse" component={View} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Ionicons
              name="md-browsers"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
      <Screen name="Exports" component={View} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          )
        }
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;