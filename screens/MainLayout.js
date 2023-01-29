
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
  TouchableOpacity, UIManager, LayoutAnimation,
  FlatList, Image, Dimensions, StatusBar, PanResponder, Modal, Alert, Switch
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Geolocation from 'react-native-geolocation-service';
import * as Animatable from 'react-native-animatable';
import { COLORS, images, icons, SIZES, FONTS, constants, Icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import LottieView from 'lottie-react-native';
import NetInfo from '@react-native-community/netinfo';
let currentNetwork;




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
const MainMap = ({ navigation, route }) => {
  const [nameedit, setnameedit] = React.useState('');
  const [loading, setloading] = React.useState(false);

  const [stores, setstores] = React.useState(
    [])
  const [uri, seturi] = React.useState('');
  const [isConnected, setisConnected] = React.useState(false);





  useEffect(() => {


    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const unsubscribe = NetInfo.addEventListener((state) => {

      setisConnected(state.isConnected)
      if (state.isConnected) {
        getitems()
      }
    });
    return () => unsubscribe();

    // _requestMapPermission();

    // mapAnimation.addListener(({ value }) => {
    //   let index = Math.floor(value / CARD_WIDTH + 0.3);
    //   if (index >= bannersArr.length) {
    //     index = bannersArr.length - 1;
    //   }
    //   if (index <= 0) {
    //     index = 0;
    //   }
    //   clearTimeout(resionTimeout);
    //   const resionTimeout = setTimeout(() => {
    //     if (mapIndex !== index) {
    //       mapIndex = index;
    //       let arr = [...bannersArr];

    //       const { coordinate } = arr[index];
    //       mapView.current.animateToRegion(
    //         {
    //           ...coordinate,
    //           latitudeDelta: 0.002,
    //           longitudeDelta: 0.002,
    //         },
    //         350,
    //       );
    //     }
    //   }, 10);
    // });

    // const unsubscribe = NetInfo.addEventListener((state) => {
    //   // console.log("Connection type", state.type);
    //   console.log("Is connected?", state.isConnected);
    //   setNetInfo(state.isConnected);
    // });
    // return () => unsubscribe();




  }, [])




  function toggleSwitch(item, index) {
    let list1 = [...stores]



    // 
    if (list1[index].admin_status == 'able') {
      list1[index].admin_status = 'disable'

    } else {
      list1[index].admin_status = 'able'

    }
    setstores(list1)
    apiavilableproduct(item, list1[index].admin_status)
  }
  const [modlmsg, setmodlmsg] = React.useState(false);
  const [msg, setmsg] = React.useState('');


  const apiavilableproduct = (item, avilable) => {

    let data_to_send = {
      service_provider_id: item.service_provider_id,
      ability_val: avilable
      // userdata.service_provider_id,
    }
    // console.log(data_to_send)
    axios.post("https://camp-coding.tech/pharma_order/admin/service_providers/toggle_service_provider_ability.php", data_to_send).then(res => {
      console.log(res.data)
      if (res.data.status == 'failed') {
        // Alert.alert('Pharmact store', 'حدث خطأ ما الرجاء المحاولة لاحقا')
        setmsg('حدث خطأ ما الرجاء المحاولة لاحقا')
        setmodlmsg(true)

      } else if (res.data.status == 'success') {
        if (avilable == 'able') {
          setmsg('المورد متاح الان')
          setmodlmsg(true)



        } else {
          setmsg('المورد غير متاح من الان')
          setmodlmsg(true)
        }
        setTimeout(() => {
          getitems()
        }, 100);


      } else {
        setmsg('حدث خطأ ما الرجاء المحاولة لاحقا')
        setmodlmsg(true)
      }


      // disable --> تم ايقاف خسايك موقتا ارجع الي الشركة

    });


  }

  const getitems = () => {
    let pg = route.params.page
    let uri = ''
    if (pg == 'able') {
      uri = 'https://camp-coding.tech/pharma_order/admin/service_providers/select_able_service_providers.php'
    } else if (pg == 'disable') {
      uri = 'https://camp-coding.tech/pharma_order/admin/service_providers/select_disable_service_providers.php'

    } else if (pg == 'online') {
      uri = 'https://camp-coding.tech/pharma_order/admin/service_providers/select_online_service_providers.php'

    } else if (pg == 'offline') {
      uri = 'https://camp-coding.tech/pharma_order/admin/service_providers/select_offline_service_providers.php'
    }
    seturi(uri)
    setloading(true)

    axios.post(uri).then(res => {
      // console.log(res.data.message)
      if (res.data.status == 'failed') {
        Alert.alert('Admin', 'حدث خطأ ما')
      } else if (res.data.status == 'success') {
        setstores(res.data.message)

      } else {
        Alert.alert('Admin', 'حدث خطأ ما')

      }

      setloading(false)

      // disable --> تم ايقاف خسايك موقتا ارجع الي الشركة

    });


  }




  function deleteitem(index) {
    let list1 = [...stores]

    list1.splice(index, 1)
    setstores(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }

  function Openedit(index) {
    let list1 = [...stores]

    if (list1[index].editable == true) {
      list1[index].editable = false
    } else {
      for (var i = 0; i < list1.length; i++) {
        list1[i].editable = false
      }
      list1[index].editable = true
      setnameedit(list1[index].service_provider_responsable_name)

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
                fontSize: 20,
                fontFamily: 'Janna LT Bold',
                marginLeft: 10


              }}>المخازن</Text>
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
          animation="fadeInUpBig"
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

              navigation.navigate('StoreDetils', {
                store_name: item.service_provider_responsable_name,

              })


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
                    fontFamily: 'Janna LT Bold', color: "#9F9FA0",
                  }}
                >
                  {item.service_provider_responsable_name}
                </Text>
              </View>
              {!item.editable ? (

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: 'flex-end',
                    alignItems: "center",
                    padding: 6
                  }}
                >

                  <TouchableOpacity
                    onPress={() => {
                      Openedit(index)
                    }}
                  >
                    <Icon
                      name='edit'
                      color={'#C2C05E'}
                      style={{
                        marginHorizontal: 20
                      }}
                      size={20}
                    />

                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      deleteitem(index)
                    }}
                  >
                    <Icon
                      name='trash'
                      color={'#f00'}
                      size={20}

                    />
                  </TouchableOpacity>

                </View>
              ) : null}

            </View>

            {item.editable ? (
              <>

                <TextInput
                  value={nameedit}
                  onChangeText={value => {
                    setnameedit(value);

                  }}
                  // placeholder={'مثال : 12345'}
                  type="phone-pad"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    // height: 7,
                    borderRadius: 10,
                    backgroundColor: '#f0eff4',
                    padding: 10,
                    marginTop: 10,
                    fontSize: 14,
                    fontFamily: 'Janna LT Bold',
                    color: "#000",

                  }}
                />
                <TouchableOpacity
                  style={{
                    alignItems: 'center', justifyContent: 'center',
                    // width:'50%'و 
                    backgroundColor: "#C2C05E",
                    borderRadius: 15,
                    marginBottom: 10,
                    width: '30%',
                    alignSelf: "center",
                    marginTop: 5
                  }}
                  onPress={() => {

                    saveNameChange(index)
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#fff',
                      // padding: 5,
                      paddingHorizontal: 5,
                      fontSize: 20,
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </>
            ) : null}
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
                {'تفعيل'}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={item.admin_status == 'able' ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  toggleSwitch(item, index)
                }}
                value={item.admin_status == 'able' ? true : false}
                style={{
                  marginHorizontal: 10
                }}
              />
              <Text
                style={{
                  fontFamily: 'Janna LT Bold', color: "#9F9FA0",
                }}
              >
                {'إيقاف'}
              </Text>

            </View>
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
      {isConnected ? (<>


        {loading ? (
          <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }} >
            <LottieView
              source={require('../assets/loading.json')}
              autoPlay
              loop
              style={{ height: 180, width: '100%' }}
              resizeMode="contain"
            />
            <Text style={{ fontFamily: FONTS.fontFamily, fontSize: 16, color: '#000' }} >
              جاري التحميل ...
            </Text>
          </View>
        ) : (
          <>
            {stores.length == 0 ? (
              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }} >
                <LottieView
                  source={require('../assets/empty.json')}
                  autoPlay
                  loop
                  style={{ height: 250, width: '100%' }}
                  resizeMode="contain"
                />
                <Text style={{ fontFamily: FONTS.fontFamily, fontSize: 16, color: '#000' }} >
                  لا يوجد حتي الان
                </Text>
              </View>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 10 }}
                onScroll={onScroll}>
                <FlatList
                  data={stores}
                  numColumns={1}
                  renderItem={({ item, index }) => renderinvoice(item, index)} />
              </ScrollView>
            )}

          </>

        )}
      </>) : 
      
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }} >
        <LottieView
          source={require('../assets/nonet.json')}
          autoPlay
          loop
          style={{ height: 200, width: '100%' }}
          resizeMode="contain"
        />
        <Text style={{ fontFamily: FONTS.fontFamily, fontSize: 16, color: '#000' }} >
         لا يوجد إتصال بالأنترنت
        </Text>
      </View>
      
      }

      <Modal
        visible={modlmsg}
        // visible={false}

        onRequestClose={() => {
          // setlogincheck(false)
        }}
        transparent={true}>
        <View
          style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.6)'
          }}>
          <View
            style={{
              width: '90%',
              padding: 10,
              backgroundColor: '#fff',
              elevation: 22,
              borderRadius: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Janna LT Bold',
                  color: "#000",
                  fontSize: 22,
                }}>
                {msg}
              </Text>


              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#ddd',
                }}
              />




              <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {

                  setmodlmsg(false)
                  setmsg('')
                }}>
                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: '#5BCDBF',
                    fontSize: 20,
                  }}>
                  حسناّ
                </Text>
              </TouchableOpacity>


            </View>


          </View>
        </View>
      </Modal>

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

export default MainMap;



