import CreateScreen from '../screens/CreateScreen'
import { optionsForNavigator } from '../utils/optionsForNavigator'
import { TouchableOpacity, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const CreateScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={optionsForNavigator}>
      <Stack.Screen
        name='CreateNav'
        component={CreateScreen}
        options={({ navigation }) => ({
          title: 'Создать',
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