import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../../Atom/SearchComponent';

import {SearchMenu} from '../../../Redux/Actions/Recipe/SearchMenu';

import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, isLoading, errorMessage} = useSelector(
    state => state.SearchMenu,
  );

  const [sortby, setSortby] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('title');
  const [refreshing, setRefreshing] = useState(false);

  const handleSearchChange = value => {
    setSearch(value);
  };

  const onSearchSubmit = () => {
    dispatch(SearchMenu(searchby, search, sortby, sort, page, limit));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    onSearchSubmit();

    setRefreshing(false);
  };

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
    }
  };

  useEffect(() => {
    onSearchSubmit();
  }, [page, search]);

  useEffect(() => {
    onSearchSubmit();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={{marginBottom: 30}}>
        <View style={{paddingHorizontal: 15, marginHorizontal: 'auto'}}>
          <View style={{marginTop: 40}}>
            <SearchBar changeText={handleSearchChange} />
          </View>
        </View>
        {data ? (
          <View style={{paddingHorizontal: 15, marginHorizontal: 'auto'}}>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              data?.rows?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      navigation.push('DetailRecipe', {id: item.id})
                    }>
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: 10,
                        borderRadius: 10,
                      }}>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          resizeMode: 'cover',
                          borderRadius: 10,
                          borderColor: 'yellow',
                          borderWidth: 2,
                        }}
                        source={{uri: item.photo_menu}}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          marginHorizontal: 8,
                          width: 150,
                        }}>
                        <Text
                          style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                          {item.title}
                        </Text>
                        <Text
                          style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                          {item.category}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 90,
                          }}>
                          <Text
                            style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>
                            {item.username}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 80,
                          justifyContent: 'space-evenly',
                          marginLeft: 5,
                        }}></View>
                    </View>
                  </TouchableOpacity>
                );
              })
            )}
            {search ? (
              <View></View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={() => goToPage(page - 1)}>
                  <Image
                    source={require('../../../image/Arrow.jpg')}
                    style={{
                      transform: [{rotate: '180deg'}],
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Halaman {page} dari {data?.pages.totalPage}
                </Text>
                <TouchableOpacity onPress={() => goToPage(page + 1)}>
                  <Image
                    source={require('../../../image/Arrow.jpg')}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 500,
            }}>
            <View>
              <Text style={{textAlign: 'center'}}>{errorMessage?.message}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
