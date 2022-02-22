import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Приложение для блога</Text>
      <Text style={styles.text}>Версия приложения <Text style={[styles.text, { fontFamily: 'rb-bold' }]}>1.0.2</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
})