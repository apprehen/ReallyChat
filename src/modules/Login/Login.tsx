import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  LayoutAnimation,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import main_logo from '../../assest/Img/main_logo.png'
import selectPng from '../../assest/Img/select.png'
import unSelectPng from '../../assest/Img/Unselected.png'
import rightPng from '../../assest/Img/right.png'
import wx_logo from '../../assest/Img/WECHAT.png'
import downArrowPng from '../../assest/Img/arrow.png'
import closePng from '../../assest/Img/close.png'
export default () => {
  const [LoginType, setLoginType] = useState<'quick' | 'input'>('quick')
  const [check, setCheck] = useState<boolean>(false)
  const navigation = useNavigation<StackNavigationProp<any>>()
  const renderQuickLogin = () => {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingHorizontal: 56,
      },
      protocolLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        // backgroundColor: '',
      },
      radioButton: {
        marginTop: 4,
        width: 20,
        height: 20,
      },
      labelTxt: {
        fontSize: 14,
        lineHeight: 22,
        color: '#999',
        marginLeft: 5,
      },
      protocolTxt: {
        fontSize: 14,
        color: '#1020ff',
        lineHeight: 22,
      },
      otherLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 100,
      },
      otherLoginTxt: {
        fontSize: 16,
        color: '#303080',
      },
      icon_right: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginLeft: 3,
        marginTop: 5,
        // marginLeft: 5,
      },
      wxLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#05c160',
        borderRadius: 28,
        height: 56,
        width: '100%',
      },
      wx_logo: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
      },
      wxLoginTxt: {
        fontSize: 18,
        color: 'white',
        marginLeft: 6,
        height: 26,
      },
      onKeyLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff2442',
        borderRadius: 28,
        height: 56,
        width: '100%',
        marginBottom: 20,
      },
      onKeyLoginTxt: {
        fontSize: 18,
        color: 'white',
        marginLeft: 6,
        height: 26,
      },
      logoMain: {
        width: '100%',
        height: 205,
        resizeMode: 'contain',
        position: 'absolute',
        top: 90,
        borderRadius: 40,
      },
    })
    return (
      <View style={styles.root}>
        <View style={styles.protocolLayout}>
          {/* <Image source={main_logo} style={styles.main_logo}></Image> */}
          <TouchableOpacity
            onPress={() => {
              setCheck(!check)
            }}>
            <Image
              source={check ? selectPng : unSelectPng}
              style={styles.radioButton}></Image>
          </TouchableOpacity>
          <Text style={styles.labelTxt}>我已阅读并同意</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.baidu.com')
            }}>
            <Text style={styles.protocolTxt}>《用户协议》和《隐私政策》</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.otherLoginButton}
          onPress={() => {
            LayoutAnimation.easeInEaseOut()
            setLoginType((type: 'quick' | 'input') => {
              return type === 'quick' ? 'input' : 'quick'
            })
          }}>
          <Text style={styles.otherLoginTxt}>其它登录方式</Text>
          <Image source={rightPng} style={styles.icon_right}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wxLoginButton} activeOpacity={0.7}>
          {/* <Image source={main_logo} style={styles.main_logo}></Image> */}
          <Image source={wx_logo} style={styles.wx_logo}></Image>
          <Text style={styles.wxLoginTxt}>微信登录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onKeyLoginButton}>
          <Text style={styles.onKeyLoginTxt}>一键登录</Text>
        </TouchableOpacity>
        <Image source={main_logo} style={styles.logoMain}></Image>
      </View>
    )
  }
  const renderInputLogin = () => {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 56,
      },
      pwdLogin: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginTop: 56,
      },
      tip: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 6,
      },
      phoneLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      pre86: {
        fontSize: 20,
        color: '#999',
      },
      downArrow: {
        marginLeft: 6,
        width: 16,
        height: 8,
      },
      phoneInput: {
        flex: 1,
        height: 64,
        backgroundColor: 'transparent',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginLeft: 14,
        fontSize: 22,
        color: '#333',
      },
      pwdLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      pwdInput: {
        flex: 1,
        height: 50,
        backgroundColor: 'transparent',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#333',
      },
      onKeyLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff2442',
        borderRadius: 28,
        height: 56,
        width: '100%',
        // marginBottom: 20,
        marginTop: 80,
      },
      onKeyLoginTxt: {
        fontSize: 18,
        color: 'white',
        marginLeft: 6,
        height: 26,
      },
      otherLoginButton: {
        position: 'absolute',
        top: 15,
        left: 30,
      },
      close: {
        height: 26,
        width: 26,
      },
    })
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.otherLoginButton}
          onPress={() => {
            LayoutAnimation.easeInEaseOut()
            setLoginType((type: 'quick' | 'input') => {
              return type === 'quick' ? 'input' : 'quick'
            })
          }}>
          <Image source={closePng} style={styles.close}></Image>
        </TouchableOpacity>
        <Text style={styles.pwdLogin}>密码登录</Text>
        <Text style={styles.tip}>未注册的手机号登陆成功后将自动注册</Text>
        <View style={styles.phoneLayout}>
          <Text style={styles.pre86}>+86</Text>
          <Image source={downArrowPng} style={styles.downArrow}></Image>
          <TextInput
            style={styles.phoneInput}
            placeholderTextColor="#999"
            placeholder="请输入手机号"
            autoFocus={false}></TextInput>
        </View>
        <View style={styles.pwdLayout}>
          <TextInput
            style={styles.pwdInput}
            placeholderTextColor="#999"
            placeholder="请输入密码"
            secureTextEntry={true}
            autoFocus={false}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.onKeyLoginButton}
          onPress={() => {
            navigation.replace('Home')
          }}>
          <Text style={styles.onKeyLoginTxt}>登陆</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      {LoginType === 'quick' ? renderQuickLogin() : renderInputLogin()}
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
    marginTop: 100,
    resizeMode: 'contain',
  },
})
