import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

export default () => {
  const styles = StyleSheet.create({
    dShow: {
      width: '100%',
      height: 300,
      borderWidth: 2,
      borderColor: 'red',
      justifyContent: 'center', // 内部内容垂直居中
      alignItems: 'center', // 内部内容水平居中
    },
  })
  return (
    <WebView
      source={{
        uri: 'https://show.yueyun.site/',
      }}
      originWhitelist={['*']}
      style={styles.dShow}
    />
  )
}
