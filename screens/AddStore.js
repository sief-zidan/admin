
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
    FlatList, Image, Dimensions, StatusBar, PanResponder, Modal, ActivityIndicator, Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MapView, { Marker, PROVIDER_GOOGLE, Polygon, Circle } from 'react-native-maps';
import Icons from 'react-native-vector-icons/FontAwesome5';

import Geolocation from 'react-native-geolocation-service';

import { COLORS, images, SIZES, FONTS, constants } from '../constants';
import NetInfo from '@react-native-community/netinfo';

import Slider from '@react-native-community/slider';

import axios from "axios";

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
const AddStore = ({ navigation, route }) => {
    const mapView = useRef();
    const _scrollView = useRef();
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);
    const [condetionmap, setcondetionmap] = React.useState(false);
    const [choicelocate, setchoicelocate] = React.useState(false);
    const [reangeval, setreangeval] = React.useState(0);
    const [loading, setloading] = React.useState(false);


    const [modlmsg, setmodlmsg] = React.useState(false);
    const [msg, setmsg] = React.useState('');


    const [storename, setstorename] = React.useState('');
    const [storenameerr, setstorenameerr] = React.useState('');

    const [responsname, setresponsname] = React.useState('');
    const [responsnameerr, setresponsnameerr] = React.useState('');

    const [phone, setphone] = React.useState('');
    const [phoneerr, setphoneerr] = React.useState('');

    const [address, setaddress] = React.useState('');
    const [addresserr, setaddresserr] = React.useState('');


    const [lang, setlang] = React.useState('');
    const [lat, setlat] = React.useState('');
    // const [widezone, setwidezone] = React.useState('');

    const [userdata, setuserdata] = React.useState('');

    function checkdata() {
        let err = 0

        if (storename == '' && storename * 0 == 0 && storename.length <= 2) {
            err++
            setstorenameerr('ادخل الاسم بشكل صحيح')
        }

        if (responsname == '' && responsname.length <= 2) {
            err++
            setresponsnameerr('اددخل اسم المسؤول بشكل صحيح')
        }

        if (phone == '' && phone.length < 10) {
            err++
            setphoneerr('ادخل رقم الهاتف بشكل صحيح')
        }
        if (address == '' && address.length < 2) {
            err++
            setaddresserr('ادخل العنوان بشكل صحيح')
        }


        if (err == 0) {
            setstorenameerr('')
            setresponsnameerr('')
            setphoneerr('')
            setaddresserr('')
            uploadstore()
        }

    }


    function uploadstore() {
        setloading(true)
        let data_to_send = {
            service_provider_name: storename,
            service_provider_phone: phone,
            service_provider_lang: lang,
            service_provider_lat: lat,
            service_provider_zone_wide: reangeval,
            service_provider_address: address,
            service_provider_responsable_name: responsname
        }
        axios.post("https://camp-coding.tech/pharma_order/admin/service_providers/add_service_provider.php", data_to_send).then(res => {
            console.log(res.data)
            if (res.data.status == 'failed') {
                if (res.data.message == 'exists') {
                    setmsg('البيانات مسجلة مسبقا')
                    setmodlmsg(true)

                }

            } else if (res.data.status == 'success') {
                setmsg('تم تسجيل البيانات بنجاح')
                setmodlmsg(true)
                setuserdata(res.data.message)
                setTimeout(() => {
                    navigation.goBack()

                }, 8000);

            } else {
                setmsg('حدث خطأ ما حاول مرة اخري')

                setmodlmsg(true)
            }

            setloading(false)

            // disable --> تم ايقاف خسايك موقتا ارجع الي الشركة

        });

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
    const [isConnected, setisConnected] = React.useState(false);

    useEffect(() => {
        _requestMapPermission();
        const unsubscribe = NetInfo.addEventListener((state) => {

            setisConnected(state.isConnected)

        });
        return () => unsubscribe();
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
    return (
        <>
            <View style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                flex: 1,
            }}>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: "center"
                        }}
                    >
                        <Text style={{
                            fontSize: 22,
                            fontFamily: 'Janna LT Bold',
                            color: '#000',
                            marginVertical: 20,
                            marginLeft: 10,
                        }}>
                            إضافة مخزن
                        </Text>

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
                            <Icons
                                name={"arrow-left"}
                                size={25}
                                color='#000'

                            />
                        </TouchableOpacity>
                    </View>



                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        // marginTop: 2,
                        marginLeft: 10,
                    }}>إسم المخزن</Text>

                    <TextInput
                        value={storename}
                        onChangeText={value => {
                            setstorename(value);

                        }}
                        placeholderTextColor="#ddd"
                        placeholder={'مثال : النخبة'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: '#f00',
                        // marginTop: 5,
                        marginLeft: 10,
                        textAlign: 'center'
                    }}>
                        {storenameerr}
                    </Text>

                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 5,
                        marginLeft: 10,
                    }}>
                        إسم المسؤول
                    </Text>
                    <TextInput
                        value={responsname}
                        onChangeText={value => {
                            setresponsname(value);

                        }}
                        placeholder={'مثال : محمد احمد'}
                        placeholderTextColor="#ddd"
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: '#f00',
                        // marginTop: 5,
                        marginLeft: 10,
                        textAlign: 'center'
                    }}>
                        {responsnameerr}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 5,
                        marginLeft: 10,
                    }}>
                        رقم الهاتف
                    </Text>
                    <TextInput
                        value={phone}
                        onChangeText={value => {
                            setphone(value);

                        }}
                        placeholderTextColor="#ddd"
                        placeholder={'مثال : 01111774110'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: '#f00',
                        // marginTop: 5,
                        marginLeft: 10,
                        textAlign: 'center'
                    }}>
                        {phoneerr}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 5,
                        marginLeft: 10,
                    }}>
                        العنوان
                    </Text>
                    <TextInput
                        value={address}
                        onChangeText={value => {
                            setaddress(value);

                        }}
                        placeholderTextColor="#ddd"
                        placeholder={'مثال : طنطا قسم اول مرور سالم'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: '#f00',
                        // marginTop: 5,
                        marginLeft: 10,
                        textAlign: 'center'
                    }}>
                        {addresserr}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setchoicelocate(true)
                        }}
                        style={{
                            flexDirection: "row",
                            marginLeft: 10
                        }}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',

                            color: 'gray',
                            marginTop: 5,
                            marginLeft: 10,
                        }}>
                            إضغط لتحديد الموقع علي
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#009bb1",
                            marginTop: 5,
                            textDecorationLine: "underline",
                            marginLeft: 5
                        }}>
                            الخريطة
                        </Text>
                    </TouchableOpacity>

                    {
                        condetionmap ? (
                            <>

                                <View
                                    style={{
                                        height: 200,
                                        width: '100%'
                                    }}
                                >
                                    <MapView
                                        // showsCompass

                                        ref={mapView}
                                        region={chocenloconmap}

                                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                        style={styles.container}

                                    >
                                        <Marker
                                            coordinate={chocenloconmap}
                                            title={"مكان المخزن"}

                                        // description={"description"}
                                        />
                                        <Circle
                                            center={
                                                chocenloconmap

                                            }
                                            radius={reangeval}
                                            strokeColor={'#009bb1'}
                                            fillColor={'#64ff704d'}
                                        />

                                    </MapView>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'Janna LT Bold',

                                    color: 'gray',
                                    marginTop: 5,
                                    marginLeft: 10,
                                }}>
                                    اسحب لتحديد منطقة التوصيل
                                </Text>
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
                                        100 km
                                    </Text>
                                    <Slider
                                        style={{ width: 200, height: 40 }}
                                        minimumValue={0}
                                        maximumValue={100000}
                                        minimumTrackTintColor="#0f0"
                                        maximumTrackTintColor="#f00"
                                        onValueChange={(val) => {

                                            setreangeval(val)
                                        }}
                                    />
                                    <Text style={{
                                        fontFamily: 'Janna LT Bold', color: "#9F9FA0",


                                    }}>
                                        0 km

                                    </Text>

                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'Janna LT Bold',
                                    textAlign: "center",
                                    color: 'gray',
                                    marginTop: -5,
                                    // marginLeft: 10,

                                }}>
                                    {parseInt(reangeval / 1000) + ' KM'}
                                </Text>
                            </>
                        ) : null
                    }

                    <TouchableOpacity
                        onPress={() => {
                            // navigation.navigate('MainPage')
                            // additem()
                            if (isConnected) {
                                checkdata()

                            } else {
                                Alert.alert('admin', 'تحقق من اتصالك بالانترنت')
                            }

                        }}
                        style={{
                            width: "90%", borderRadius: 10, justifyContent: "center"
                            , alignSelf: "center", marginTop: 30,
                            marginBottom: 10,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#009bb1",
                            padding: 5,



                        }}
                    >
                        {loading ? (
                            <ActivityIndicator
                                size={30}
                                style={{
                                    padding: 8,
                                }}
                                color='#fff'
                            />
                        ) : (
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                إضافة
                            </Text>
                        )}



                    </TouchableOpacity>

                </ScrollView>

            </View>

            <Modal
                visible={choicelocate}
                onRequestClose={() => {
                    setaddmodal(false)
                }}
                animationType='slide'
            >
                <View style={{
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    flex: 1,
                }}>
                    <MapView
                        // showsCompass
                        showsUserLocation
                        showsMyLocationButton
                        ref={mapView}
                        region={resion}

                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.container}
                        onPress={(loc) => {
                            // loc.nativeEvent.coordinate
                            // setchocenloconmap(loc.nativeEvent.coordinate)
                            setchocenloconmap({
                                latitude: loc.nativeEvent.coordinate.latitude,
                                longitude: loc.nativeEvent.coordinate.longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            })
                            setlang(loc.nativeEvent.coordinate.longitude)
                            setlat(loc.nativeEvent.coordinate.latitude)
                        }}
                    >
                        {/* <Marker
          coordinate={chocenloc}
          /> */}
                        <Marker
                            coordinate={chocenloconmap}
                            title={"مكان المخزن"}
                        // description={"description"}
                        />


                    </MapView>
                    <TouchableOpacity
                        onPress={() => {
                            // navigation.navigate('MainPage')
                            // additem()
                            setchoicelocate(false)
                            setcondetionmap(true)
                        }}
                        style={{
                            width: "90%", borderRadius: 10, justifyContent: "center"
                            , alignSelf: "center", marginTop: 30,
                            marginBottom: 10,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#009bb1",
                            padding: 5,



                        }}
                    >
                        <Text style={{
                            fontSize: 22, textAlign: "center", color: "#fff",
                            fontFamily: FONTS.fontFamily
                        }}>
                            تأكيد
                        </Text>

                    </TouchableOpacity>

                </View>


            </Modal>

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


                            {userdata.length != 0 ? (
                                // {"service_provider_id": 6, "service_provider_login_id": 1487, "service_provider_pass": 1989}, "status": "success"}
                                <>
                                    <Text
                                        style={{
                                            fontFamily: 'Janna LT Bold',
                                            color: "#000",
                                            fontSize: 22,
                                        }}>
                                        {'رقم الدخول : ' + userdata.service_provider_login_id}
                                    </Text>
                                    <Text
                                        style={{
                                            fontFamily: 'Janna LT Bold',
                                            color: "#000",
                                            fontSize: 22,
                                        }}>
                                        {'الرقم السري : ' + userdata.service_provider_pass}
                                    </Text>
                                </>

                            ) : null}




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
        </>
    );
}
export default AddStore;

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
