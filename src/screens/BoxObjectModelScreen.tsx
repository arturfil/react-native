import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "red",
    paddingHorizontal: "20%"
  },
  title: {
    // paddingHorizontal: "30%",
    paddingVertical: 40,
    fontSize: 20,
    width: 250,
    borderWidth: 10,
    backgroundColor: "red"
  }
});