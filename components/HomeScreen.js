import React, {useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../assets/consts/colors';
import sizes from '../assets/consts/sizes';
import images from '../assets/images';
import hotels from '../assets/data/hotels';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';

const Home = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState([]);

  const categoryIcons = [
    <Image name="Near you" source={images.nearyou} />,
    <Image name="Hourly" source={images.hourly} />,
    <Image name="Overnight" source={images.overnight} />,
    <Image name="Couple" source={images.couple} />,
    <Image name="Travel" source={images.travel} />,
    <Image name="Luxury" source={images.luxury} />,
  ];
  const ListCategories = () => {
    const [categoriesTime, setCategoriesTime] = useState([]);
    const [categoriesType, setCategoriesType] = useState([]);

    useEffect(() => {
      const mid = Math.ceil(categoryIcons.length / 2);
      setCategoriesTime(categoryIcons.slice(0, mid));
      setCategoriesType(categoryIcons.slice(mid));
    }, []);

    return (
      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          {categoriesTime.map((icon, index) => (
            <View key={index} style={styles.iconContainer}>
              {icon}
              <Text style={styles.iconName}>{icon.props.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.categoryRow}>
          {categoriesType.map((icon, index) => (
            <View key={index} style={styles.iconContainer}>
              {icon}
              <Text style={styles.iconName}>{icon.props.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const listImages = [
    images.image1,
    images.image2,
    images.image3,
    images.image4,
  ];

  const SalesOffCard = ({hotel}) => {
    return (
      <View style={styles.salesOffCard}>
        <View style={styles.itemRating}>
          <Ionicons name="star" size={sizes.iconTiny} color={colors.yellow} />
          <Text style={styles.itemRatingText}>5.0</Text>
        </View>
        <Image style={styles.salesOffCardImage} source={hotel.image} />
        <View style={styles.itemInfor}>
          <Text style={styles.itemInforName}>{hotel.name}</Text>
          <Text style={styles.itemInforPrice}>{hotel.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <StatusBar translucent={false} backgroundColor={colors.secondary} />
      <View style={styles.menuWrapper}>
        <Image source={images.logo} style={styles.logoImage} />
        <Ionicons
          name="notifications-outline"
          size={sizes.iconMedium}
          color={colors.primary}
          style={styles.menuIcon}
        />
      </View>

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SearchBar */}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" style={styles.searchIcon} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.searchInput}
            placeholder="Search for destinations, hotels, ..."
            placeholderTextColor="#333333"
            // value={searchTerm}
            // onChangeText={onSearchTermChange}
            // onEndEditing={onSearchTermSubmit}
          />
        </View>

        {/* Location */}
        <View style={styles.locationWrapper}>
          <Ionicons
            name="location-sharp"
            size={sizes.iconSmall}
            color={colors.dark}
            style={styles.locationIcon}
          />
          <Picker
            style={styles.locationPicker}
            selectedValue={selectedLocation}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLocation(itemValue)
            }>
            <Picker.Item style={styles.pickerItem} label="Hà Nội" value="HN" />
            <Picker.Item
              style={styles.pickerItem}
              label="Hồ Chí Minh"
              value="HCM"
            />
          </Picker>
        </View>

        {/* Filters  */}
        <ListCategories />

        {/* Slider */}
        <SliderBox
          ImageComponent={FastImage}
          images={listImages}
          autoplay={true}
          circleLoop={true}
          activeOpacity={1}
          dotStyle={styles.dotSlider}
          dotColor={colors.light}
          inactiveDotColor={colors.dark}
          imageLoadingColor={colors.primary}
          paginationBoxStyle={styles.boxSlider}
          ImageComponentStyle={styles.boxImageSlider}
          onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
          currentImageEmitter={index => console.log(`current pos is: ${index}`)}
        />

        {/* SalesOff */}
        <View style={styles.salesOffWrapper}>
          <Text style={styles.textTitle}>SALES OFF</Text>
          <Text>Show all</Text>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          renderItem={({item}) => <SalesOffCard hotel={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },

  //Header
  menuWrapper: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logoImage: {
    width: sizes.widthLogo,
    height: sizes.heightLogo,
  },
  menuIcon: {
    height: 32,
    width: 32,
  },

  //SearchBar
  searchBar: {
    borderRadius: 8,
    borderColor: colors.dark,
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: colors.white,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    color: colors.lightblack,
    fontSize: sizes.iconLarge,
    alignSelf: 'center',
    marginHorizontal: 10,
  },

  //Location
  locationWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  locationIcon: {
    width: 32,
    height: 32,
    marginTop: 15,
  },
  locationPicker: {
    verticalAlign: 'center',
    marginLeft: -15,
    width: 200,
  },
  pickerItem: {
    fontWeight: 'bold',
    color: colors.dark,
    fontFamily: 'Lato-Black',
    fontSize: 20,
  },

  //Filters
  categoryContainer: {
    marginTop: 10,
    marginHorizontal: 40,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    height: 60,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconName: {
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: '700',
    color: colors.black,
    marginTop: 15,
    textAlignVertical: 'bottom',
  },

  //Slider
  boxSlider: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  boxImageSlider: {
    borderRadius: 15,
    width: 350,
  },
  dotSlider: {
    width: 14,
    height: 14,
    borderRadius: 15,
    marginHorizontal: -5,
  },

  //SalesOff
  textTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 21,
    color: colors.dark,
  },
  salesOffWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  salesOffCard: {
    height: 150,
    width: 150,
    backgroundColor: colors.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 50,
  },
  salesOffCardImage: {
    height: 100,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  flatList: {
    paddingLeft: 20,
    marginTop: 20,
    paddingBottom: 30,
  },
  itemRating: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    flexDirection: 'row',
  },
  itemRatingText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemInfor: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  itemInforName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
  itemInforPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.darkgray,
  },
});
export default Home;
