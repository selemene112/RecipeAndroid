import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardRecipe from './CardRecipe';

function MyRecipe() {
  return (
    <View>
      <Text style={styles.TextMyRecipe}>My Recipe</Text>

      <CardRecipe />
    </View>
  );
}

const styles = StyleSheet.create({
  TextMyRecipe: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default MyRecipe;
