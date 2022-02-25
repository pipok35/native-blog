import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabsForPosts } from './TabsForPosts'
import { AboutScreenNavigation } from './AboutScreenNavigation'
import { CreateScreenNavigation } from './CreateScreenNavigation'

const MainNavigatorDrawer = createDrawerNavigator()

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigatorDrawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#303f9f',
          drawerLabelStyle: {
            fontFamily: 'rb-bold',
          },
        }}
      >
        <MainNavigatorDrawer.Screen
          name='TabsOfPosts'
          component={TabsForPosts}
          options={{ drawerLabel: 'Главная' }}
        />
        <MainNavigatorDrawer.Screen
          name='Create'
          component={CreateScreenNavigation}
          options={{ drawerLabel: 'Создать' }}
        />
        <MainNavigatorDrawer.Screen
          name='About'
          component={AboutScreenNavigation}
          options={{ drawerLabel: 'О приложении' }}
        />
      </MainNavigatorDrawer.Navigator>
    </NavigationContainer>
  )
}

/* 
 AppNavigation(Drawer) -> TabsForPosts(Tab), AboutScreenNavigation(Stack), CreateScreenNavigation(Stack)

 TabsFortPosts -> AllPostsStackNavigator(Stack), BookedPostsStackNavigator(Stack)
*/
