import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { AllPostsStackNavigator } from './AllPostsStackNavigator'
import { BookedPostsStackNavigator } from './BookedPostsStackNavigator'

const Tab = createBottomTabNavigator()

export const TabsForPosts = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarActiveTintColor: '#303f9f',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons
              name="folder"
              size={24}
              color={color}
            />
          },
          tabBarLabel: 'Все'
        }}
        name="TabAllPosts"
        component={AllPostsStackNavigator} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons
              name="star"
              size={24}
              color={color}
            />
          },
          tabBarLabel: 'Избранное'
        }}
        name="TabBooked"
        component={BookedPostsStackNavigator} />
    </Tab.Navigator>
  )
}