import {SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useTheme from '@/Hooks/useTheme'
import { HomeContainer, SplashScreenContainer } from '@/Screen'

const Stack = createNativeStackNavigator()

const ApplicationNavigation = () => {
  const { Layout, } = useTheme()
  
  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor:'red'}]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreenContainer} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeContainer} 
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigation