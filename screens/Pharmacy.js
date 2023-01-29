
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Animated,
  Platform,
  TextInput, Switch,
  ScrollView,
  TouchableOpacity, UIManager, LayoutAnimation,
  FlatList, Image, Dimensions, StatusBar, PanResponder, Modal
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Geolocation from 'react-native-geolocation-service';
import * as Animatable from 'react-native-animatable';
import { COLORS, images, icons, SIZES, FONTS, constants, Icons } from '../constants';

import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
const activeColor = 'red';
const inactiveColor = 'lightgrey';
const dotWidth = 20;
const CARD_HEIGHT = 220;
const CARD_WIDTH = SIZES.width * 0.8;
const SPACING_FOR_CARD_INSET = SIZES.width * 0.1 - 10;
const headerHeight = 100;
let scrollValue = 0;
let headerVisible = true;
let focused = false;
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Pharmacy = ({ navigation, route }) => {
  const [nameedit, setnameedit] = React.useState('');
  const toggleSwitchadd = () => setIsEnabled(previousState => !previousState);

  const [stores, setstores] = React.useState(
    [
      {
        name: 'ddddddddss',
        id: '15',
        avilable: false,
        showdes: false
      }, {
        name: 'cc',
        id: '10',
        avilable: false,
        showdes: false
      }, {
        name: 'aa',
        id: '18',
        avilable: false,
        showdes: false
      }, {
        name: 'gg',
        id: '11',
        avilable: false,
        showdes: false
      },
      {
        name: 'bb',
        id: '13',
        avilable: false,
        showdes: false
      }, {
        name: 'ee',
        id: '18',
        avilable: false,
        showdes: false
      }, {
        name: 'aa',
        id: '14',
        avilable: false,
        showdes: false
      }, {
        name: 'jj',
        id: '17',
        avilable: false,
        showdes: false
      },
    ])

  function toggleSwitch(index) {
    let list1 = [...stores]
    list1[index].avilable = !list1[index].avilable

    setstores(list1)

  }


  useEffect(() => {

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])

  function deleteitem(index) {
    let list1 = [...stores]

    list1.splice(index, 1)
    setstores(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }
  function Openedit(index) {
    let list1 = [...stores]

    if (list1[index].showdes == true) {
      list1[index].showdes = false
    } else {
      for (var i = 0; i < list1.length; i++) {
        list1[i].showdes = false
      }
      list1[index].showdes = true


    }
    setstores(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }


  function saveNameChange(index) {
    let list1 = [...stores]

    list1[index].name = nameedit
    list1[index].editable = false
    setstores(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }


  const [sliderWidth, setsliderWidth] = React.useState(null);
  const [choicelocate, setchoicelocate] = React.useState(false);


  const [coordinates, setcoordinates] = React.useState([
    { name: 'Burger', latitude: 30.841474, longitude: 30.866848 },
    { name: 'Burger', latitude: 30.840810, longitude: 30.859381 },
    { name: 'Burger', latitude: 30.836180, longitude: 30.858584 },
    { name: 'Burger', latitude: 30.832509, longitude: 30.869951 },

  ]);
  const [resion, setResion] = React.useState({
    latitude: 30.78997862686301,
    longitude: 31.001596385997733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [chocenloconmap, setchocenloconmap] = React.useState({
    latitude: 30.78997862686301,
    longitude: 31.001596385997733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [condetionmap, setcondetionmap] = React.useState(false);
  // Ref
  const mapView = useRef();
  const _scrollView = useRef();
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  const [addmodal, setaddmodal] = React.useState(false);


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


          // mapView.current.animateToRegion(initialRegion);
          setResion(initialRegion);
          setchocenloconmap(initialRegion)

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




  function renderHeader() {
    return (
      <>


        <View style={{
          width: '100%',
          height: 60,
          backgroundColor: '#009bb1',
          alignItems: "center",
          justifyContent: "center"

        }}>
          <View
            style={{
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-between",
            }}
          >


            <View
              style={{
                // flex: 1,
                // paddingLeft: 20,
              }}
            >


              <Text style={{
                color: '#fff',
                fontSize: 21,
                fontFamily: 'Janna LT Bold',


              }}>الصيدليات</Text>
            </View>


            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 10,

              }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Icon
                name={"arrow-left"}
                size={22}
                color='#fff'

              />
            </TouchableOpacity>
          </View>

        </View>
      </>
    );
  }
  function renderinvoice(item, index) {
    return (
      <>

        <Animatable.View
          key={item}
          animation="fadeInUp"
          delay={index * 100}
          useNativeDriver

        >

          <TouchableOpacity



            style={{

              width: '95%',
              borderRadius: SIZES.radius,
              alignSelf: 'center',
              padding: 10,



              backgroundColor: COLORS.white,
              marginVertical: SIZES.base,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              // elevation: 50,
            }}
            onPress={() => {

              Openedit(index)
            }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',

              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'flex-start',
                  alignItems: "center"
                }}
              >


                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',color: "#9F9FA0",

                  }}
                >
                  {item.name}
                </Text>
              </View>


            </View>
            <View
              style={{

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  fontFamily: 'Janna LT Bold', color: "#9F9FA0",
                }}
              >
                {'ايقاف عن العمل'}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={item.avilable ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  toggleSwitch(index)
                }}
                value={item.avilable}
                style={{
                  marginHorizontal: 10
                }}
              />
              <Text
                style={{
                  fontFamily: 'Janna LT Bold', color: "#9F9FA0",
                }}
              >
                {'الرجوع الي العمل'}
              </Text>

            </View>

            {item.showdes ? (
              <>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PharmacyOrder')
                    let list1 = [...stores]
                    list1[index].showdes = false
                    setstores(list1)

                  }}
                  style={{
                    // borderBottomWidth: .5,
                    borderColor: '#009bb1', justifyContent: 'space-around',
                    alignItems: "center",
                    flexDirection: "row",
                    borderBottomWidth: .5,
                    width: '70%',
                    alignSelf: "center",
                    marginTop: 10
                  }}>
                  <Text style={{
                    color: "#000", fontSize: 18,
                    fontFamily: FONTS.fontFamily,

                  }}>
                    عرض طلبات الصيدلية
                  </Text>

                </TouchableOpacity>

              </>
            ) : null}

          </TouchableOpacity>

        </Animatable.View>






      </>
    )
  }
  const animation = useRef(new Animated.Value(1)).current;


  const onScroll = e => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={'#009bb1'} />

      {renderHeader()}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 10 }}
        onScroll={onScroll}>
        <FlatList
          data={stores}
          numColumns={1}
          renderItem={({ item, index }) => renderinvoice(item, index)} />
      </ScrollView>


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
  }, container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 50
  },
  txt: {
    fontSize: 25,
    color: '#000'
  },
  barContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  bar: {
    height: 3,
    width: '100%',
    backgroundColor: inactiveColor,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  dot: {
    height: dotWidth,
    width: dotWidth,
    borderRadius: dotWidth / 2,
    backgroundColor: activeColor,
    position: 'absolute',
  },
  activeLine: {
    height: '100%',
    width: '100%',
    backgroundColor: activeColor,
    marginLeft: '-100%'
  }
});

export default Pharmacy;



