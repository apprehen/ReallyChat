import React from 'react'
import {Text, StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {
  CardAnimationContext,
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import Welcome from './src/modules/welcome/Welcome'
import Login from './src/modules/Login/Login'
import Home from './src/modules/Home/Home'
const stack = createStackNavigator()
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            cardStyle: {
              elevation: 1,
            },
          }}>
          <stack.Screen
            name={'Welcome'}
            component={Welcome}
            options={{
              headerShown: false,
              // TODO
            }}
          />
          <stack.Screen
            name={'Login'}
            component={Login}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              // TODO
            }}
          />
          <stack.Screen
            name={'Home'}
            component={Home}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              // TODO
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
