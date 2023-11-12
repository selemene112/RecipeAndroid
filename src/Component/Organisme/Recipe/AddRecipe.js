import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {AddNewRecipe} from '../../../Redux/Actions/Recipe/AddNewRecipe';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../../Molecules/Navbar';

function AddRecipe() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '2',
    photo: '',
  });

  //=========================================== For Call API ==================================
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.AddNewRecipe);

  const uploadRecipe = async () => {
    let formData = new FormData();
    formData.append('title', inputData?.title);
    formData.append('ingredients', inputData?.ingredients);
    formData.append('category_id', inputData?.category_id);
    if (selectedImage) {
      formData.append('photo', {
        uri: selectedImage?.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }
    dispatch(AddNewRecipe(formData, navigation.navigate));
  };

  const onChangeInput = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  //=========================================== End Call API ==================================
  // ========================================= Get Image ================================
  const cameraLaunch = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };
  const galleryLaunch = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchImageLibrary(options, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };

  //=========================================== End Get Image ==================================

  //=========================================== For Category ==================================

  const categoryOptions = [
    {label: 'Appetizer', value: '1'},
    {label: 'Main Course', value: '2'},
    {label: 'Dessert', value: '3'},
  ];

  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const showCategoryModal = () => {
    setCategoryModalVisible(true);
  };

  const hideCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  const selectCategory = (categoryId, categoryName) => {
    setSelectedCategory(categoryName);
    setInputData({...inputData, category_id: categoryId});
    hideCategoryModal();
  };
  //=========================================== End For Category ==================================

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.TitlePage}>My Recipe</Text>
        <TextInput
          style={styles.InputTitle}
          placeholder="Title"
          onChangeText={value => onChangeInput('title', value)}
          value={inputData?.title}
        />
        <TextInput
          style={styles.InputIngredient}
          placeholder="Ingredients"
          onChangeText={value => onChangeInput('ingredients', value)}
          value={inputData?.ingredients}
        />
        {selectedImage && (
          <Image
            source={{uri: selectedImage?.uri}}
            style={styles.ImageRecipe}
          />
        )}
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={styles.AddCameraBackground}
            onPress={cameraLaunch}>
            <Image
              source={require('../../../image/CameraAddMenu.jpg')}
              style={styles.AddCamera}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.GetLibraryCamera}
            onPress={galleryLaunch}>
            <Image
              source={require('../../../image/Folder.jpg')}
              style={styles.AddCamera}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={showCategoryModal}>
          <View style={styles.InputCategory}>
            {selectedCategory ? (
              <Text>{selectedCategory}</Text>
            ) : (
              <Text style={{color: 'gray', fontSize: 20}}>Select Category</Text>
            )}
          </View>
        </TouchableOpacity>

        <Modal
          isVisible={isCategoryModalVisible}
          backdropOpacity={0.5}
          onBackdropPress={hideCategoryModal}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 30,
              borderRadius: 10,
            }}>
            {categoryOptions.map(option => (
              <TouchableOpacity
                key={option.value}
                onPress={() => selectCategory(option.value, option.label)}
                style={{paddingVertical: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={uploadRecipe}>
            <Text style={styles.buttonText}>Add Menu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.NavbarContainer}>
          <Navbar />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1f0',
    alignItems: 'center',
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitlePage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  InputTitle: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  InputIngredient: {
    width: 300,
    height: 170,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  InputFoto: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  InputCategory: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  button: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'yellow',
  },
  buttonText: {
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  AddCamera: {
    backgroundColor: 'black',
    width: 70,
    height: 70,
  },
  AddCameraBackground: {
    marginTop: 20,

    marginRight: 10,
  },
  GetLibraryCamera: {
    marginTop: 20,

    marginRight: 10,
    marginLeft: 70,
  },
  ImageRecipe: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  },
  NavbarContainer: {
    // position: 'absolute',
    bottom: 0,
    width: '100%',

    backgroundColor: 'yellow',
  },
  ButtonContainer: {
    marginBottom: 120,
  },
});

export default AddRecipe;
