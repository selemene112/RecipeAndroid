import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Navbar from '../../Molecules/Navbar';

function HomePage() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text style={styles.TextPopuler}>Popular Recipe </Text>
      <Text style={styles.TextPopulerCheck}>For You</Text>

      <View>
        <Image
          source={require('../../../image/RendangCard.jpg')}
          style={styles.ImagePopuler}
        />

        <Text style={styles.TextInPhoto}>Rendang</Text>
      </View>

      <Text style={styles.TextNewRecipe}> New Recipe</Text>

      <View style={styles.ViewNewRecipe}>
        <View style={styles.ContainerView}>
          <Image
            source={require('../../../image/Panci.jpg')}
            style={styles.ImageOnNewRecipe}
          />
          <Text style={styles.TextNew}>Soup</Text>
        </View>

        <View style={styles.ContainerView}>
          <Image
            source={require('../../../image/Chiken.jpg')}
            style={styles.ImageOnNewRecipe}
          />
          <Text style={styles.TextNew}>Chiken</Text>
        </View>

        <View style={styles.ContainerView}>
          <Image
            source={require('../../../image/Seafood.jpg')}
            style={styles.ImageOnNewRecipe}
          />
          <Text style={styles.TextNew}>Seafod</Text>
        </View>

        <View style={styles.ContainerView}>
          <Image
            source={require('../../../image/Chiken.jpg')}
            style={styles.ImageOnNewRecipe}
          />
          <Text style={styles.TextNew}>Dessert</Text>
        </View>
      </View>

      <View style={styles.NavbarContainer}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextPopuler: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  TextPopulerCheck: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ImagePopuler: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginLeft: 30,
  },
  TextInPhoto: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: -40,
    color: 'white',
  },
  TextNewRecipe: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ViewNewRecipe: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  ImageOnNewRecipe: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  ContainerView: {
    flex: 1,
  },
  TextNew: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  NavbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'yellow',
  },
});

export default HomePage;
