import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../assets/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import sizes from '../assets/consts/sizes';

const DetailHomestayScreen = ({navigation, route}) => {
  const item = route.params;
  console.log(item);

  const RoomItem = () => {
    return <View />;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <ImageBackground source={item.image} style={styles.headerImage}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={sizes.iconExtraSmall}
            color={colors.white}
            onPress={navigation.goBack}
          />
          <Icon
            name="bookmark-border"
            size={sizes.iconSmall}
            color={colors.white}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <Icon name="place" color={colors.white} size={sizes.iconSmall} />
        </View>
        <View style={styles.itemInfor}>
          <Text style={styles.textName}> {item.name}</Text>
          <Text style={styles.textLocation}> {item.location}</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color={colors.yellow} />
                <Icon name="star" size={20} color={colors.yellow} />
                <Icon name="star" size={20} color={colors.yellow} />
                <Icon name="star" size={20} color={colors.yellow} />
                <Icon name="star" size={20} color={colors.gray} />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginLeft: 5,
                  color: colors.black,
                }}>
                4.0
              </Text>
            </View>
            <Text style={{fontSize: 13, color: colors.gray}}>365 reviews</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: colors.gray}}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.grey,
                marginLeft: 5,
              }}>
              ${item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: colors.grey,
                marginLeft: 5,
              }}>
              + breakfast
            </Text>
          </View>
        </View>
        <RoomItem />
        <View>
          <TouchableOpacity style={styles.btnBook}>
            <Text
              style={{
                color: colors.white,
                fontSize: 14,
                fontFamily: 'Merriweather-Bold',
              }}>
              SELECT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailHomestayScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemInfor: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Merriweather-Black',
    color: colors.black,
  },
  textLocation: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 5,
  },
  btnBook: {
    height: 42,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: colors.dark,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: colors.light,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
});
