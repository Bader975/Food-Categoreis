import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import MealsScreen from './screens/MealsScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        {/* Setting defult Screen Options On Stack.Navigator */}
        <Stack.Navigator screenOptions={{
          headerTintColor: '#fff', headerStyle: { backgroundColor: '#401504' },
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          {/* First Screen will Be the Default */}
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={{
              title: "All FOOD", headerTintColor: '#fff', headerStyle: { backgroundColor: '#401504' },
              contentStyle: { backgroundColor: '#3f2f25' }
            }} />
            {/* options Pass in funtion */}
          <Stack.Screen name="MealsScreen" component={MealsScreen} options={({route})=>{
            return{
              title: route.params.CategoryName,
              
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
