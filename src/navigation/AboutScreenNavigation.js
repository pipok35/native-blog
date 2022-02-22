import AboutScreen from '../screens/AboutScreen'
import { optionsForNavigator } from '../utils/optionsForNavigator'
import { TouchableOpacity, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const AboutScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={optionsForNavigator}>
      <Stack.Screen
        name='AboutNav'
        component={AboutScreen}
        options={({ navigation }) => ({
          title: 'О приложении',
          headerLeft: () => (
            <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => { navigation.toggleDrawer() }}>
              <MaterialIcons
                name="menu"
                size={24}
                color={Platform.OS === 'android' ? '#fff' : '#303f9f'}
              />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  )
}