import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.appName}>IdeaBox</Text>
    </View>

  )
}

  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'lightblue',
      flex: 0,
      alignSelf: 'stretch',
      alignItems: 'center',
      height: 100,
      justifyContent: 'center'
    },
    appName: {
      color: '#fff',
      fontSize: 25
    }
  })