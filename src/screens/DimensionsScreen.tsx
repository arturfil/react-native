import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DimensionsScreen = () => {
  return (
      <View>
        <Text style={styles.title}>
          Dimensions Screen
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  }
});