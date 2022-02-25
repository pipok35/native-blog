import * as Font from 'expo-font'

export async function bootApp() {
  try {
    await Font.loadAsync({
      'rb-bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'rb-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    })
  } catch (error) {
    console.log('Error ', error)
  }
}
