import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

export default SettingsTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})