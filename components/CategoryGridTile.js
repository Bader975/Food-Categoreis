import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CategoryGridTile({ title, color,onPress}) {
  const navigation=useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable style={({ pressed }) => [{ flex: 1 }, pressed ? { opacity: 0.50 } : null]} android_ripple={{ color: '#cccc' }}
      onPress={onPress} >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    overflow: Platform.OS != 'ios' ? 'hidden' : 'visible'
  },
  title: {
    fontSize: 20,
    fontFamily: 'bold'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 16
  }

})