import React, {useEffect} from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import main_logo from '../../assest/Img/main_logo.png'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  useEffect(() => {
    startLogin()
  }, [])
  const startLogin = () => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 3000)
  }
  return (
    <View style={styles.root}>
      <Image source={main_logo} style={styles.main_logo}></Image>
      <Text style={styles.welcome_text}>
        Welcome to chatApp to recoder your life
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  main_logo: {
    width: 200,
    height: 200,
    marginTop: 75,
  },
  welcome_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    width: '60%',
    textAlign: 'center',
    // 行高
    lineHeight: 30,
  },
})

export default Welcome
