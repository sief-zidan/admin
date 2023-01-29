import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  ToastAndroid,
  StyleSheet,
  Animated,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import NetInfo from '@react-native-community/netinfo';
import Geocoder from 'react-native-geocoding';
import TextTicker from 'react-native-text-ticker';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { COLORS, images, icons, SIZES, FONTS, constants } from '../constants';
import Feather from 'react-native-vector-icons/Feather';

const CARD_HEIGHT = 220;
const CARD_WIDTH = SIZES.width * 0.8;
const SPACING_FOR_CARED_INSET = SIZES.width * 0.1 - 10;
const MainLayout = ({ navigation }) => {
  // Ref
  const mapView = React.useRef();
  const _scrollView = React.useRef();
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  // Network
  const [networkConnection, setNewtworkConnection] = React.useState(null);
  //   GeoLocation
  const [error, SetError] = React.useState(null);
  const [resion, setResion] = React.useState(null);

  // Jobs Locations
  const [jobsLocations, setJobsLocations] = React.useState([]);
  // Place Name
  const [placeName, setPlaceName] = React.useState("")

  // UseEffect
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async state => {
      setNewtworkConnection(state.isInternetReachable);
    });
    requestLocationPermision();
  }, []);

  React.useEffect(() => {
    if (networkConnection && jobsLocations.length == 0) {
      req_getJobsLocations();
    }
    if (networkConnection == false) {
      checkInternetConnection();
    }
  }, [networkConnection]);

  async function requestLocationPermision() {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (response === 'granted') {
        locateCurrentPosition();
      }
    } else {
      const granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      // console.log(granted);
      if (granted === 'granted') {
        locateCurrentPosition();
      }
    }
  }
  function locateCurrentPosition() {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(JSON.stringify(position));

        let initialRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        };

        setResion(initialRegion);

        mapView.current.animateToRegion(initialRegion);
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            // console.log(json);

            var addressComponent = json.results[0].formatted_address;

            setPlaceName(addressComponent);
          })
          .catch(error => console.warn(error));
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 },
    );
  }

  React.useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= jobsLocations.length) {
        index = jobsLocations.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { delivery_latitude, delivery_longitude } = jobsLocations[index];

          mapView.current.animateToRegion(
            {
              latitude: parseFloat(delivery_latitude),
              longitude: parseFloat(delivery_longitude),
              latitudeDelta: 0.088864195044303443,
              longitudeDelta: 0.080142817690068,
            },
            350,
          );
        }
      }, 10);
    });
  });

  const interpolations = jobsLocations.map((marker, index) => {
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
  const onMarkerPress = mapEventData => {
    // const markerID = mapEventData._targetInst.return.key;

    // let x = markerID * CARD_WIDTH + markerID * 20;
    // if (Platform.OS === 'ios') {
    //   x = x - SPACING_FOR_CARED_INSET;
    // }

    // _scrollView.current.scrollTo({ x: x, y: 0, animated: true });


    alert("here is location")
  };
  function req_getJobsLocations() {
    let data_to_send = {
      driver_id: '70',
    };

    axios
      .post(constants.API_ADDRESS + 'select_available_jobs.php', data_to_send)
      .then(res => {
        const Tempdata = [
          {
            accepted_driver_id: '50',
            accepted_offer_id: '50',
            cash_amount: '123476',
            cash_returned: '0',
            delivery_address:
              'Unnamed Road, Kafr Qarshoum, Tala, Menofia Governorate, Egypt',
            delivery_address_detail: 'تيترت',
            delivery_latitude: '30.702253421546317',
            delivery_longitude: '30.87542211636901',
            driver_earning: '0',
            driver_note: '',
            driver_penalty_net_amount: null,
            job_accepted_date: null,
            job_approve_timestamp: null,
            job_arrived_timestamp: null,
            job_complete_timestamp: null,
            job_coupon_code: null,
            job_coupon_id: null,
            job_coupon_type: null,
            job_coupon_value: null,
            job_create_date: '0000-00-00',
            job_delivered_audio_msg: null,
            job_delivered_image: null,
            job_delivered_signature: null,
            job_delivered_timestamp: null,
            job_id: '158',
            job_net_amount: null,
            job_not_received_timestamp: null,
            job_paid: '0',
            job_penalty: null,
            job_penalty_status: null,
            job_returned_timestamp: null,
            job_started_timestamp: null,
            job_status: 'PENDING',
            job_timestamp: '2021-12-16 16:42:54',
            job_type: 'SEND',
            merchent_id: '84',
            new_offer: '0',
            offer_data: '',
            package_height: '0',
            package_image:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            package_length: '0',
            package_width: '0',
            partner_id: null,
            pay_advance: '0',
            payment_method: null,
            penality_paid_amount: null,
            pickup_address:
              'Unnamed Road, Shabshir Al Hessah, Tanta, Gharbia Governorate, Egypt',
            pickup_address_detail: 'ؤترتنرز',
            pickup_date_time_from: '2021-12-16 23:38:24',
            pickup_date_time_to: '0000-00-00 00:00:00',
            pickup_latitude: '30.86598094391052',
            pickup_longitude: '30.86598094391052',
            reason: 'order not ready',
            recipient_name: 'Adel Elkhamisy',
            recipient_phone: '01243676768',
            title: 'laptop',
            vehicle_type: 'BIKE',
            weight: '0',
          },
          {
            accepted_driver_id: '70',
            accepted_offer_id: '112',
            cash_amount: '1500',
            cash_returned: '0',
            delivery_address: null,
            delivery_address_detail: null,

            delivery_latitude: '31.21029044646206',
            delivery_longitude: '30.02068363800001',
            driver_earning: '0',
            driver_note: 'قابل للكسر',
            driver_penalty_net_amount: null,
            job_accepted_date: null,
            job_approve_timestamp: null,
            job_arrived_timestamp: null,
            job_complete_timestamp: null,
            job_coupon_code: null,
            job_coupon_id: null,
            job_coupon_type: null,
            job_coupon_value: null,
            job_create_date: null,
            job_delivered_audio_msg: null,
            job_delivered_image: null,
            job_delivered_signature: null,
            job_delivered_timestamp: null,
            job_id: '153',
            job_net_amount: null,
            job_not_received_timestamp: null,
            job_paid: '0',
            job_penalty: null,
            job_penalty_status: null,
            job_returned_timestamp: null,
            job_started_timestamp: null,
            job_status: 'PENDING',
            job_timestamp: '2021-12-14 09:40:07',
            job_type: 'SELL',
            merchent_id: '84',
            new_offer: '0',
            offer_data: '',
            package_height: '50',
            package_image: null,
            package_length: '100',
            package_width: '50',
            partner_id: null,
            pay_advance: '0',
            payment_method: null,
            penality_paid_amount: null,
            pickup_address: 'اي كلام دلوقني ',
            pickup_address_detail: 'بقول اي كلام',
            pickup_date_time_from: '2021-12-14 16:36:43',
            pickup_date_time_to: '2021-12-14 16:36:43',
            pickup_latitude: null,
            pickup_longitude: null,
            reason: null,
            recipient_name: 'احمد الشهاوي',
            recipient_phone: '01066184717',
            title: 'لاب توب',
            vehicle_type: 'BIKE',
            weight: '10',
          },
        ];
        // setJobsLocations(res.data);
        setJobsLocations(Tempdata);
      });
  }

  function checkInternetConnection() {
    ToastAndroid.showWithGravityAndOffset(
      'Please, Check Your Network Connection',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
  function onRegionChange(resion) {

    Geocoder.init(constants.GOOGLE_MAP_API_KEY);
    // setTempLoc(resion);

    Geocoder.from(resion.latitude, resion.longitude)
      .then(json => {
        // console.log(json);

        var addressComponent = json.results[0].formatted_address;
        setPlaceName(addressComponent)

      })
      .catch(error => console.warn(error));
  }

  function renderHeader() {
    return (
      <View
        style={{
          height: 60,
          alignItems: 'center',
          backgroundColor: COLORS.black,
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={30} color={COLORS.lightGray2} />
        </TouchableOpacity>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>ShahnDriver</Text>
        <TouchableOpacity onPress={() => { }}>
          <Image
            source={icons.notification}
            style={{
              width: 28,
              height: 28,
              tintColor: COLORS.white,
              // backgroundColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{
          flex: 1,
        }}
        onRegionChangeComplete={region => onRegionChange(region)}
        provider={PROVIDER_GOOGLE}
        initialRegion={resion}>
        {resion && (
          <Marker
            coordinate={resion}
            style={{
              width: 28,
              height: 28,
            }}
            pinColor={COLORS.blue}
            title="My Loc"
          />
        )}
        {jobsLocations.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(marker.delivery_latitude),
                longitude: parseFloat(marker.delivery_longitude),
              }}
              onPress={e => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={images.location}
                  style={[styles.marker]}
                />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
    );
  }

  function renderGetLocation() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 70,
          right: SIZES.padding,
        }}>
        <TouchableOpacity
          onPress={() => requestLocationPermision()}
          style={{
            marginTop: SIZES.radius,
            width: 40,
            height: 40,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.gray2,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.focus}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>
      </View>
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
          left: SPACING_FOR_CARED_INSET,
          bottom: 0,
          right: SPACING_FOR_CARED_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARED_INSET : 0,
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
        {jobsLocations.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={
                // {
                //   uri: marker.package_image,
                // }
                marker.package_image == null || marker.package_image == ''
                  ? images.noImage
                  : { uri: marker.package_image }
              }
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text
                numberOfLines={1}
                style={{ fontSize: 12, fontWeight: 'bold' }}>
                {marker.title}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color: '#444',
                }}>
                {marker.driver_note}
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddressAndPackage', {
                      order: jobsLocations[index],
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                    borderColor: '#FF6347',
                    borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#FF6347',
                    }}>
                    Get More Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      {/* Header */}
      {renderHeader()}
      {/* Map */}
      {renderMap()}
      {/* get Location */}
      {renderGetLocation()}
      {/* places */}
      {/* {jobsLocations && renderPlaces()} */}
      {/* fake marker */}

      <View style={styles.markerFixed}>
        <Image
          style={{
            height: 48,
            width: 48,
          }}
          source={

            icons.location_pin1
          }
        />
      </View>
      {/* Place Name */}

      <View style={{ ...styles.locationsContainer }} >
        <TouchableOpacity
          style={{
            width: '100%',
            height: 60,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: SIZES.radius,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

          }} >
          <View style={{
            width: 40,
            alignItems: "center",
            justifyContent: "center"
          }} >
            <Image
              source={icons.location_pin1}
              style={{
                width: 30,
                height: 30
              }}
            />
          </View>
          <TextTicker
            style={{ fontSize: 11 }}
            duration={4500}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}>
            {placeName != '' ? placeName : 'getting your address....'}
          </TextTicker>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 35,
    height: 35,
  },
  locationsContainer: {
    position: 'absolute',
    top: 70,
    width: '100%',
    paddingHorizontal: 10,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -20,
    position: 'absolute',
    top: '50%',
  },
});
export default MainLayout;
