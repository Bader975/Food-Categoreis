import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native'
import React from 'react'

export default function MealItem({ title, imageUrl, affordability, complexity, duration }) {
    // console.log(imageUrl);
    return (
        <View style={styles.MealItems}>
            <Pressable style={({ pressed }) => [{ flex: 1 }, pressed ? { opacity: 0.50 } : null]} android_ripple={{ color: '#cccc' }}>
                <View style={styles.innerContainer}>
                    <View >
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text>{duration} Min</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    MealItems: {
        margin: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 8,
        overflow: Platform.OS != 'ios' ? 'hidden' : 'visible',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 1
        },

    },
    innerContainer: {
        borderRadius: 10,
        overflow: 'hidden'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },

    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        margin: 5,

    }
})