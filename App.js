import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux'; // Impor Provider dari Redux
import configureStore from './src/Redux/store'; // Impor store Redux Anda
import LoginOrganisme from './src/Component/Organisme/Auth/Login';
import LoginScreen from './src/Screen/Auth/Login';
import CardRecipe from './src/Component/Organisme/Recipe/CardRecipe';
import SearchScreen from './src/Component/Organisme/SearchRecipe/SearchRecipe';
import Search from './src/Component/Organisme/SearchRecipe/SearchRecipe1';
import DetailRecipe from './src/Component/Organisme/Recipe/DetailRecipe';
import Profil from './src/Component/Organisme/Profil/Profil';
import MyRecipe from './src/Component/Organisme/Recipe/MyRecipe';
import AddRecipe from './src/Component/Organisme/Recipe/AddRecipe';
import EditMyRecipe from './src/Component/Organisme/Recipe/EditMyRecipe';
import TouchableOpacityProfil from './src/Component/Molecules/TouchableOpacity/TouchableOpacity,';
import Navbar from './src/Component/Molecules/Navbar';
import HomePage from './src/Component/Template/RecipeTemplate/Home';

const Stack = createNativeStackNavigator();
const {store} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MyRecipe"
          screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="LoginOrganisme" component={LoginOrganisme} />  */}
          <Stack.Screen name="Profil" component={Profil} />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
          <Stack.Screen name="EditMyRecipe" component={EditMyRecipe} />
          <Stack.Screen
            name="TouchableOpacityProfil"
            component={TouchableOpacityProfil}
          />
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen name="HomePage" component={HomePage} />

          <Stack.Screen name="MyRecipe" component={MyRecipe} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
          <Stack.Screen name="CardRecipe" component={CardRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
