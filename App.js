import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import {Provider} from 'react-redux'
import store from './src/store'
import { bootApp } from './src/bootApp'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootApp}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.error(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
