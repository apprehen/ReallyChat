import React, {Suspense} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HomeWebShow from './HomeWebShow'
const Home = () => {
  const styles = StyleSheet.create({
    containerWrapper: {
      flex: 1,
      backgroundColor: '#eee',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderWidth: 1, // 设置边框宽度
      borderColor: 'red', // 设置边框颜色为红色，以便清楚看到边界
      padding: 1, // 设置内边距
      margin: 2, // 设置外边距
    },
    webShow: {
      width: '80%',
      height: '70%',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 20,
    },
  })
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.webShow}>
        <HomeWebShow></HomeWebShow>
      </View>
    </View>
  )
}

export default Home
