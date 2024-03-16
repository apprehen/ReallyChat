import AsyncStorage from '@react-native-async-storage/async-storage'

const save = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.error(err)
  }
}

const load = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    console.error(err)
    return null
  }
}

const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (err) {
    console.error(err)
  }
}

const clear = async () => {
  try {
    return await AsyncStorage.clear()
  } catch (err) {
    console.error(err)
  }
}
