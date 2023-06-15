import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';
import { useNavigation } from '@react-navigation/native'



export default function CategoriesScreen() {

  // useNavigation Hook like React Js 
  const navigation = useNavigation();

  function hanlePress(item) {
    navigation.navigate("MealsScreen", {
      CategoryId: item.id,
      CategoryName: item.title,
      CategoryColor: item.color
    })
  }

  return (
    <View>

      <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        // Grind Number Of Columns

        numColumns={2}
        renderItem={({ item }) =>
          // Render The List in separate Component depandency

          <CategoryGridTile title={item.title} color={item.color} onPress={() => hanlePress(item)} />} />
    </View>
  )
}

const styles = StyleSheet.create({});


