import { Platform } from 'react-native'

export const optionsForNavigator = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#303f9f' : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : '#303f9f',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
