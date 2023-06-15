import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsScreen() {
    // Route Hook
    const route = useRoute()
    const id = route.params.CategoryId
    const name = route.params.CategoryName
    const color = route.params.CategoryColor

    const showMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0;
    })


    function renderItem({ item }) {
        const mealItemsProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...mealItemsProps} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={showMeals} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})