// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   Platform,
//   ToastAndroid,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   Linking,
//   FlatList,
//   Alert, BackHandler, Modal
// } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import NetInfo from '@react-native-community/netinfo';
// import Geocoder from 'react-native-geocoding';
// import TextTicker from 'react-native-text-ticker';
// import { request, PERMISSIONS } from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
// import * as Animatable from 'react-native-animatable';
// import { COLORS, images, icons, SIZES, FONTS, constants } from '../constants';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios';
// import { SharedElement } from 'react-navigation-shared-element';
// import FastImage from 'react-native-fast-image';
// import { IconButton } from 'react-native-paper';

// const { width, height } = Dimensions.get('window');

// const CARD_HEIGHT = 220;
// const CARD_WIDTH = SIZES.width * 0.8;
// const SPACING_FOR_CARD_INSET = SIZES.width * 0.1 - 10;

// const MainLayout = ({ navigation }) => {
//   // Ref
//   const _scrollView = useRef();
//   const mapView = useRef();

//   let mapIndex = 0;
//   let mapAnimation = new Animated.Value(0);
//   const [loading, setloading] = React.useState(false)

//   useEffect(() => {

//     mapAnimation.addListener(({value}) => {
//       let index = Math.floor(value / CARD_WIDTH + 0.3);
//       if (index >= bannersArr.length) {
//         index = bannersArr.length - 1;
//       }
//       if (index <= 0) {
//         index = 0;
//       }
//       clearTimeout(resionTimeout);
//       const resionTimeout = setTimeout(() => {
//         if (mapIndex !== index) {
//           mapIndex = index;
//           let arr = [...bannersArr];

//           const {coordinate} = arr[index];
//           mapView.current.animateToRegion(
//             {
//               ...coordinate,
//               latitudeDelta: 0.002,
//               longitudeDelta: 0.002,
//             },
//             350,
//           );
//         }
//       }, 10);
//     });


//     getPrimissionGo()
//   }, []);
//   const [msg, errmsg] = React.useState('')


//   const getPrimissionGo = () => {
//     setloading(true)

//     axios.get('https://grag-app.000webhostapp.com/mit_grage/select_grages.php').then((res) => {
//       if (res.status == 200) {

//         if (Array.isArray(res.data)) {
//           setgaraglocat(res.data)
//         } else {
//           msg("حدث خطأ ما برجاء المحاولة لاحقا")
//         }
//       } else {
//         msg("حدث خطأ ما برجاء المحاولة لاحقا")

//       }
//       setloading(false)

//     })
//   }



//   const handleBackPress = useCallback(() => {
//     // do some action and return true or if you do not
//     // want the user to go back, return false instead

//     return true
//   }, []);

//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//     return () =>

//       BackHandler.removeEventListener('hardwareBackPress', handleBackPress);


//   }, [handleBackPress]);



//   // Network
//   const [networkConnection, setNewtworkConnection] = React.useState(null);

//   const [resion, setResion] = React.useState({
//     latitude: 30.78997862686301,
//     longitude: 31.001596385997733,
//     latitudeDelta: 0.015,
//     longitudeDelta: 0.0121,
//   });

//   // Jobs Locations

//   const [garaglocat, setgaraglocat] = React.useState(

//     []
//   );



//   const [placeName, setPlaceName] = React.useState("")

//   // UseEffect
//   React.useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(async state => {
//       setNewtworkConnection(state.isInternetReachable);
//     });
//     requestLocationPermision();
//   }, []);

//   React.useEffect(() => {
//     if (networkConnection && garaglocat.length == 0) {

//     }
//     if (networkConnection == false) {
//       checkInternetConnection();
//     }
//   }, [networkConnection]);

//   async function requestLocationPermision() {
//     if (Platform.OS === 'ios') {
//       var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//       if (response === 'granted') {
//         locateCurrentPosition();
//       }
//     } else {
//       const granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//       // console.log(granted);
//       if (granted === 'granted') {
//         locateCurrentPosition();
//       }
//     }
//   }
//   function locateCurrentPosition() {

//     Geolocation.getCurrentPosition(
//       position => {
//         console.log(position)
//         let initialRegion = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.02,
//           longitudeDelta: 0.02,
//         };


//         mapView.current.animateToRegion(initialRegion);
//         setResion(initialRegion);

//         // Geocoder.from(position.coords.latitude, position.coords.longitude)
//         //   .then(json => {
//         //     // console.log(json);

//         //   })
//         //   .catch(error => console.warn(error));
//       },
//       error => Alert.alert('Error', JSON.stringify(error)),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 },
//     );
//   }


//   const [bannersArr, setbannersArr] = useState([{
//     'image': 'https://blog.logrocket.com/wp-content/uploads/2021/07/basic-textinput-rn.png',
//     'id': 1,
//     'title': 'hello hello',
//     'active': true,
//     'description': 'ghassajcb',
//     'coordinate': {
//       latitude: 37.78825,
//       longitude: -123.4324
//     }
//   }, {
//     'image': 'https://blog.logrocket.com/wp-content/uploads/2021/07/basic-textinput-rn.png',
//     'id': 1,
//     'title': 'hello hello',
//     'active': true,
//     'description': 'ghassajcb',
//     'coordinate': {
//       latitude: 37.78825,
//       longitude: -122.4324
//     }
//   }, {
//     'image': 'https://blog.logrocket.com/wp-content/uploads/2021/07/basic-textinput-rn.png',
//     'id': 1,
//     'title': 'hello hello',
//     'active': true,
//     'description': 'ghassajcb',
//     'coordinate': {
//       latitude: 37.78825,
//       longitude: -120.4324
//     }
//   }]);

//   const interpolations = bannersArr?.map((maker, index) => {
//     const inputRange = [
//       (index - 1) * CARD_WIDTH,
//       index * CARD_WIDTH,
//       (index + 1) * CARD_WIDTH,
//     ];
//     const scale = mapAnimation.interpolate({
//       inputRange,
//       outputRange: [1, 1.5, 1],
//       extrapolate: 'clamp',
//     });
//     return { scale };
//   });

//   const onMarkerPress = mapEventData => {


//     navigation.navigate('GaragDetils',
//       {
//         data: mapEventData
//       }
//     );

//   };



//   function checkInternetConnection() {
//     ToastAndroid.showWithGravityAndOffset(
//       'Please, Check Your Network Connection',
//       ToastAndroid.SHORT,
//       ToastAndroid.BOTTOM,
//       25,
//       50,
//     );
//   }
//   function onRegionChange(resion) {

//     Geocoder.init(constants.GOOGLE_MAP_API_KEY);
//     // setTempLoc(resion);

//     Geocoder.from(resion.latitude, resion.longitude)
//       .then(json => {
//         // console.log(json);

//         var addressComponent = json.results[0].formatted_address;
//         setPlaceName(addressComponent)

//       })
//       .catch(error => console.warn(error));
//   }

//   function renderHeader() {
//     return (
     

//       <View style={{ alignItems: 'center' }} >
//         {/** *****************************************************************************              Header                ***************************************************************************************************************** */}

//         <StatusBar backgroundColor={"#009bb1"} />
//         <View style={{ width: '100%', height: 60, flexDirection: 'row', backgroundColor: "#009bb1", elevation: 22 }} >

//           <TouchableOpacity


//             style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//             onPress={() => {
//               navigation.navigate('Teaminfo')

//             }}>

//             <Icon
//               name='info-circle'
//               color={'#fff'}
//               size={25}
//             />



//           </TouchableOpacity>
//           <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={{ ...FONTS.h2, color: COLORS.white }}>Garag Map</Text>
//           </View>
//           <View style={{ flex: 1, }} />



//         </View>
//         {/** ******************************************************************************************************************************************************************************************************************** */}



//       </View>
//     );
//   }

//   function renderMap() {
//     return (
//       <MapView
//         ref={mapView}
//         style={{
//           flex: 1,
//         }}
//         onRegionChangeComplete={region => onRegionChange(region)}
//         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         initialRegion={resion}>
//         {bannersArr?.map((marker, index) => {
//           const scaleStyle = {
//             transform: [
//               {
//                 scale: interpolations[index].scale,
//               },
//             ],
//           };
//           return (
//             <Marker
//               key={index}
//               coordinate={marker?.coordinate}
//               // هى فين دى coordinate
//               onPress={e => onMarkerPress(e)}>
//               <Animated.View style={[styles.markerWrap, scaleStyle]}>
//                 <Animated.Image
//                   source={icons.location_pin1}
//                   style={[styles.marker]}
//                 />
//               </Animated.View>
//             </Marker>
//           );
//         })}


//       </MapView>
//     );
//   }

//   function renderPlaces() {
//     return (
//       <Animated.ScrollView
//         ref={_scrollView}
//         horizontal
//         pagingEnabled
//         scrollEventThrottle={1}
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={CARD_WIDTH + 20}
//         snapToAlignment="center"
//         style={styles.scrollView}
//         contentInset={{
//           top: 0,
//           left: SPACING_FOR_CARD_INSET,
//           bottom: 0,
//           right: SPACING_FOR_CARD_INSET,
//         }}
//         contentContainerStyle={{
//           paddingHorizontal:
//             Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
//         }}
//         onScroll={Animated.event(
          
//           [
//             {
//               nativeEvent: {
//                 contentOffset: {
//                   x: mapAnimation,
//                 },
//               },
//             },
//           ],
//           {
//             useNativeDriver: true,
//           },
//          )}>
//         <FlatList
//           data={bannersArr}
//           horizontal
//           keyExtractor={(_, index) => `bann#-${index}`}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity
//               activeOpacity={0.8}
//               onPress={() => {
//                 alert("4")
//               }}
//               style={styles.card}
//               key={index}>
//               <SharedElement
              
//                 id={`item.${item.id}.image_url`}
//                 style={{
//                   ...styles.cardImage,
//                 }}>
//                 <FastImage
//                   source={
//                     item?.withPath == true ? { uri: item.image } : item.image
//                   }
//                   style={styles.cardImage}
//                   resizeMode="stretch"
//                 />
//               </SharedElement>

//               <View style={styles.textContent}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'space-around',
//                   }}>
//                   <Text
//                     numberOfLines={1}
//                     style={{
//                       ...FONTS.h3,
//                       color: COLORS.black,
//                       flex: 1,
//                     }}>
//                     {item?.title}
//                   </Text>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                     }}>
//                     <Text
//                       style={{
//                         ...FONTS.h4,
//                         color: COLORS.black,
//                         // textAlign: 'left',
//                       }}>
//                       {item.active ? 'فعال' : 'غير فعال'}
//                     </Text>
//                     <Icon
//                       name="radio-button-on-outline"
//                       color={item.active ? COLORS.green : COLORS.red}
//                       size={24}
//                     />
//                   </View>
//                 </View>

//                  <Text
//                   numberOfLines={1}
//                   style={{
//                     ...FONTS.h4,
//                     color: COLORS.darkGray,
//                   }}>
//                   {item?.description}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//         {/* {bannersArr?.map((marker, index) => {
//           return (

//           );
//         })} */}

//         {/* </> */}
//       </Animated.ScrollView>
//     );
//   }


//   function renderGetLocation() {
//     return (
//       <View
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: SIZES.padding,
//         }}>
//         <TouchableOpacity
//           onPress={() => requestLocationPermision()}
//           style={{
//             marginTop: SIZES.radius,
//             width: 40,
//             height: 40,
//             borderRadius: SIZES.radius,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderWidth: 1,
//             borderColor: COLORS.gray2,
//             backgroundColor: COLORS.white,
//           }}>
//           <Image
//             source={icons.focus}
//             style={{
//               width: 20,
//               height: 20,
//               tintColor: COLORS.gray,
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "#eae8eb",
//         }}>
//         <StatusBar backgroundColor={"#009bb1"} barStyle="light-content" />
//         {/* Header */}
//         {renderHeader()}
//         {/* Map */}
//         {renderMap()}
//         {renderPlaces()}
//         {/* get Location */}
//         {renderGetLocation()}

//         {/* { location when move} */}
//         {/* <View style={styles.markerFixed}>
//         <Image
//           style={{
//             height: 48,
//             width: 48,
//           }}
//           source={

//             icons.location_pin1
//           }
//         />
//       </View> */}
//         {/* Place Name */}

//         {/* <View style={{ ...styles.locationsContainer }} >
//           <TouchableOpacity
//             style={{
//               width: '100%',
//               height: 60,
//               backgroundColor: COLORS.white,
//               flexDirection: 'row',
//               alignItems: 'center',
//               borderRadius: SIZES.radius,
//               shadowColor: "#000",
//               shadowOffset: {
//                 width: 0,
//                 height: 2,
//               },
//               shadowOpacity: 0.25,
//               shadowRadius: 3.84,

//               elevation: 5,

//             }} >
//             <View style={{
//               width: 40,
//               alignItems: "center",
//               justifyContent: "center"
//             }} >
//               <Image
//                 source={icons.location_pin1}
//                 style={{
//                   width: 30,
//                   height: 30
//                 }}
//               />
//             </View>
//             <TextTicker
//               style={{ fontSize: 11, color: "#8A898C" }}
//               duration={4500}
//               loop
//               bounce
//               repeatSpacer={50}
//               marqueeDelay={1000}>
//               {placeName != '' ? placeName : 'getting your address....'}
//             </TextTicker>

//           </TouchableOpacity>


//         </View> */}


//       </View>
//       <Modal
//         visible={false}
//         onRequestClose={() => {
//         }}
//         transparent={true}>
//         <View
//           style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <View
//             style={{
//               width: width * 0.9,
//               padding: 10,
//               backgroundColor: '#fff',
//               elevation: 22,
//               borderRadius: 15,
//             }}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: 10,
//               }}>
//               <Text
//                 style={{
//                   color: "#487DBE",
//                   fontSize: 22,
//                 }}>
//                 El Garag
//               </Text>
//             </View>
//             <View
//               style={{
//                 alignSelf: 'center',
//                 width: '90%',
//                 borderWidth: 1.5,
//                 borderColor: '#ddd',
//               }}
//             />

//             <View style={{ paddingHorizontal: 20, paddingVertical: 12, justifyContent: "center", alignItems: "center" }}>
//               <Text
//                 style={{
//                   fontFamily: FONTS.fontFamily,
//                   color: "#009bb1",
//                   fontSize: 20,
//                   textAlign: 'center',
//                   width: "80%"
//                 }}>
//                 {/* {this.state.Modal_msg} */}
//               </Text>
//             </View>



//             <TouchableOpacity
//               style={{
//                 width: '40%',
//                 alignSelf: 'center',
//                 padding: 10,
//                 backgroundColor: "#00B3B3",
//                 borderRadius: 10,
//                 elevation: 3,
//                 marginVertical: 10,
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//                 alignItems: 'center',
//               }}
//               onPress={() => {


//               }}>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   color: '#fff',
//                   fontSize: 18,
//                 }}>
//                 حسناّ
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   textContent: {
//     flex: 2,
//     padding: 10,
//   },
//   cardImage: {
//     flex: 3,
//     width: '100%',
//     height: '100%',
//     alignSelf: 'center',
//   },
//   scrollView: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingVertical: 10,
//   },
//   card: {
//     // padding: 10,
//     elevation: 2,
//     backgroundColor: '#FFF',
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowRadius: 5,
//     shadowOpacity: 0.3,
//     shadowOffset: { x: 2, y: -2 },
//     height: CARD_HEIGHT,
//     width: CARD_WIDTH,
//     overflow: 'hidden',
//   },
//   markerWrap: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 50,
//     height: 50,
//     // backgroundColor:"red"
//   },
//   marker: {
//     width: 45,
//     height: 45,
//   },
//   locationsContainer: {
//     position: 'absolute',
//     top: 70,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   markerFixed: {
//     left: '50%',
//     marginLeft: -24,
//     marginTop: -20,
//     position: 'absolute',
//     top: '50%',
//   },
// });
// export default MainLayout;

