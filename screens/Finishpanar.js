// import * as React from 'react'
// import { StatusBar } from 'react-native'
// import { View, Text, TouchableOpacity, Image, Linking, Dimensions, BackHandler } from 'react-native'
// import { FlatList, ScrollView } from 'react-native-gesture-handler'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { COLORS, FONTS, SIZES } from '../constants';

// const { width, height } = Dimensions.get('window')

// export default class Finishpanar extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             goBackBackground: null,
//             data: [
//                 {
//                     image : 'https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg', 
//                     title : 'hello', 
//                     date : '50-20-2022'
//                 } ,  {
//                     image : 'https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?auto=format&h=200', 
//                     title : 'بانر الميدان', 
//                     date : '20-20-2202'
//                 },  {
//                     image : 'https://static.vecteezy.com/system/resources/thumbnails/000/382/314/small/ZZZZZ2692.jpg', 
//                     title : 'بانر المدارس', 
//                     date : '30-10-2025'
//                 },  {
//                     image : 'https://img.freepik.com/free-vector/digital-connecting-banner-technology-polygon-background_1035-17960.jpg?w=2000', 
//                     title : 'بانر المول', 
//                     date : '20-12-2010'
//                 }
//             ]
//         }
//     }


//     renderHeader() {
//         return (
//             <>

//                 <View style={{ width: width, height: height * 0.08, backgroundColor: "#009bb1", flexDirection: 'row' }} >
//                     <View style={{ flex: 1 }} />
//                     <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
//                         <Text style={{ color: '#fff', fontSize: 19, fontFamily: FONTS.fontFamily }} >
//                             الصيانات المنتهية
//                         </Text>
//                     </View>
//                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
//                         <TouchableOpacity
//                             onPress={() => {
//                                 this.props.navigation.goBack()
//                             }}>
//                             <Ionicons
//                                 name="chevron-back"
//                                 style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
//                             />
//                         </TouchableOpacity>
//                     </View>



//                 </View>
//             </>
//         );
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }} >
//                 <StatusBar backgroundColor={'#009bb1'} />
//                 <ScrollView>
//                     {this.renderHeader()}


// <FlatList 
// data={this.state.data}
// renderItem={({ item, index })=>(
//     <View style={{
//         elevation: 5, borderRadius: 15, backgroundColor: '#fff', width: '95%',
//         alignSelf: 'center', marginVertical: 5, padding: 5
//     }} >



//         <Image
//             source={{ uri: item.image }}

//             style={{
//                 width: '95%',
//                 // height: '90%',
//                 height: 150,
//                 alignSelf: 'center',
//                 borderRadius: 5,

//             }}
//             resizeMode='contain'
//         />



//         <View style={{
//             // height: '10%',
//             padding: 10,

//         }}>
//             <View
//                 style={{
//                     flexDirection: "row"
//                 }}
//             >
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 20, color: "#000", fontFamily: FONTS.fontFamily }}>
//                     إسم البانر :
//                 </Text>
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 18, color: "#9F9FA0", fontFamily: FONTS.fontFamily }}>
//                     {item.title}
//                 </Text>
//             </View>


//             <View
//                 style={{
//                     flexDirection: "row"
//                 }}
//             >
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 20, color: "#000", fontFamily: FONTS.fontFamily }}>
//                     الوصف :
//                 </Text>
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 18, color: "#9F9FA0", fontFamily: FONTS.fontFamily }}>
//                     {item.title}
//                 </Text>
//             </View>
//             <View
//                 style={{
//                     flexDirection: "row"
//                 }}
//             >
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 20, color: "#000", fontFamily: FONTS.fontFamily }}>
//                     تاريخ تاكيد الصيانة :
//                 </Text>
//                 <Text
//                     // numberOfLines={1}
//                     style={{ fontSize: 18, color: "#9F9FA0", fontFamily: FONTS.fontFamily }}>
//                     {item.date}
//                 </Text>
//             </View>
//         </View>


//     </View>

// )}
// />
















//                 </ScrollView>
//             </View>
//         )
//     }
// }

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Animated,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList, Image, Dimensions, StatusBar
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import NetInfo from '@react-native-community/netinfo';
import TextTicker from 'react-native-text-ticker';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import * as Animatable from 'react-native-animatable';
import { COLORS, images, icons, SIZES, FONTS, constants } from '../constants';
import { SharedElement } from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import { IconButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = 220;
const CARD_WIDTH = SIZES.width * 0.8;
const SPACING_FOR_CARD_INSET = SIZES.width * 0.1 - 10;
const MainMap = ({ navigation, route }) => {

  const [bannersArr, setbannersArr] = useState([{
    'image': 'https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000',
    'id': 1,
    'title': 'بانر 1',
    'active': true,
    'description': 'ghassajcb',
    'coordinate': {
      latitude: 37.78825,
      longitude: -123.4324
    }
  }, {
    'image': 'https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg',
    'id': 1,
    'title': 'بانر 2',
    'active': true,
    'description': 'ghassajcb',
    'coordinate': {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }, {
    'image': 'https://blog.logrocket.com/wp-content/uploads/2021/07/basic-textinput-rn.png',
    'id': 1,
    'title': 'hello hello',
    'active': true,
    'description': 'ghassajcb',
    'coordinate': {
      latitude: 37.78825,
      longitude: -120.4324
    }
  }]);

  const [resion, setResion] = React.useState({
    latitude: 30.78997862686301,
    longitude: 31.001596385997733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [chocenloc, setchocenloc] = React.useState({
    latitude: 30.78997862686301,
    longitude: 31.001596385997733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  // Ref
  const mapView = useRef();
  const _scrollView = useRef();
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const interpolations = bannersArr?.map((maker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });
    return { scale };
  });

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= bannersArr.length) {
        index = bannersArr.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(resionTimeout);
      const resionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          let arr = [...bannersArr];

          const { coordinate } = arr[index];
          mapView.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002,
            },
            350,
          );
        }
      }, 10);
    });
  });

  useEffect(() => {
    _requestMapPermission();
  }, []);

  async function _requestMapPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Need Location Permission',
        message: 'Need access to your location ',
      },
    );

    if (granted) {

      Geolocation.getCurrentPosition(
        position => {
          let initialRegion = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          };


          mapView.current.animateToRegion(initialRegion);
          setResion(initialRegion);
          setchocenloc(initialRegion)

        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          // distanceFilter: 0,
          // forceRequestLocation: true,
        },
      );
    }
  }

  function onMarkerPress(mapEventData) {
    const markerId = mapEventData._targetInst.return.key;
    let x = markerId * CARD_WIDTH + markerId * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  }

  function renderMap() {
    return (
      <>
        <MapView
          // showsCompass
          showsUserLocation
          showsMyLocationButton
          ref={mapView}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.container}
          region={resion}
          onPress={(loc) => {
            setchocenloc(loc.nativeEvent.coordinate)
          }}
        >
          {/* <Marker
          coordinate={chocenloc}
          /> */}
          <Marker
            coordinate={chocenloc}
            title={"title"}
            description={"description"}
          />
        </MapView>
        {/* <View
          style={{
            position: 'absolute',
            top: 55,
            left: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              _requestMapPermission();
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: RFValue(40),
              width: RFValue(40),
              backgroundColor: COLORS.primary,
              borderRadius: RFValue(50 / 2),
              alignSelf: 'flex-end',
              margin: RFValue(20),
            }}>
            <FastImage
              source={icons.target}
              style={{
                width: 20,
                height: 20,
              }}
              tintColor={COLORS.white}
            />
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.searchBox}>
          <TextInput
            placeholder="بحث هنا"
            placeholderTextColor={COLORS.black}
            autoCapitalize="none"
            style={{
              flex: 1,
              padding: 0,
              ...FONTS.h4,
              textAlign: 'right',
            }}
          />
          <IconButton
            icon={() => {
              return (
                <FastImage
                  source={icons.add}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              );
            }}
            size={8}
            onPress={() => navigation.navigate('AddBanner')}
          />
        </View> */}
      </>
    );
  }

  function renderPlaces() {
    return (
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        <FlatList
          data={bannersArr}
          horizontal
          keyExtractor={(_, index) => `bann#-${index}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('GaragDetils', {
                  passedBannerDetails: item,
                });

                // navigation.navigate('BannerDetails', {
                //   bannerData: item,
                // });
              }}
              style={styles.card}
              key={index}>
              <SharedElement
                id={`item.${item.id}.image_url`}
                style={{
                  ...styles.cardImage,
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.cardImage}
                  resizeMode="stretch"
                />
              </SharedElement>

              <View style={styles.textContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      ...FONTS.h3,
                      color: COLORS.black,
                      flex: 1,
                    }}>
                    {item?.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...FONTS.h4,
                        color: COLORS.black,
                        // textAlign: 'left',
                      }}>
                      {'غير فعال'}
                    </Text>
                    <Ionicons
                      name="radio-button-on-outline"
                      color={COLORS.red}
                      size={24}
                    />
                  </View>
                </View>

                {/* <StarRating ratings={item?.rating} reviews={item?.reviews} /> */}
                <Text
                  numberOfLines={1}
                  style={{
                    ...FONTS.h4,
                    color: COLORS.darkGray,
                  }}>
                  {item?.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {/* {bannersArr?.map((marker, index) => {
          return (
          
          );
        })} */}
      </Animated.ScrollView>
    );
  }
  function renderHeader() {
    return (
      <>

        <View style={{ width: width, height: height * 0.08, backgroundColor: "#009bb1", flexDirection: 'row' }} >
          <View style={{ flex: 1 }} />
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 19, fontFamily: FONTS.fontFamily }} >
              تفاصيل البانر
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}>
              <Ionicons
                name="chevron-back"
                style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
              />
            </TouchableOpacity>
          </View>



        </View>
      </>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={'#009bb1'} />

      {renderHeader()}

      {renderMap()}
      {/* {bannersArr && renderPlaces()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignSelf: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  scrollView: {
    position: 'absolute',
    bottom: RFValue(60),
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffcardImageset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    marginBottom: 4,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
});
export default MainMap;



