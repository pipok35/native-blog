import { TouchableOpacity, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import { optionsForNavigator } from '../utils/optionsForNavigator'

const Stack = createNativeStackNavigator()

export const AllPostsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={optionsForNavigator}>
      <Stack.Screen
        name="AllPosts"
        component={MainScreen}
        options={({ navigation }) => ({
          title: 'Главная',
          headerRight: () => (
            <TouchableOpacity onPress={() => { navigation.navigate('Create') }}>
              <MaterialIcons
                name="add-a-photo"
                size={24}
                color={Platform.OS === 'android' ? '#fff' : '#303f9f'}
              />
            </TouchableOpacity>
          ),
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
      <Stack.Screen
        name="Post"
        component={PostScreen}
        // Опции в PostScreen(setOptions)
      />
    </Stack.Navigator>
  )
}