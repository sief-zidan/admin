import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

import Icons from 'react-native-vector-icons/FontAwesome5';


export default class Storestaps extends React.Component {

    render() {
        return (
            <>

                <StatusBar
                    backgroundColor={'#009bb1'}
                />
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
                                paddingLeft: 20,
                            }}
                        >


                            <Text style={{
                                color: '#fff',
                                fontSize: 25,
                                fontFamily: FONTS.fontFamily

                            }}>
                                المخازن
                            </Text>
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
                                this.props.navigation.goBack()
                            }}
                        >
                            <Icons
                                name={"arrow-left"}
                                size={25}
                                color='#fff'

                            />
                        </TouchableOpacity>

                    </View>


                </View>


                <ScrollView>

                    <LinearGradient colors={['#34CAA9', '#009BB1', '#058EBD']}
                        style={{
                            width: "90%", borderRadius: 20, justifyContent: "center"
                            , alignSelf: "center", marginTop: 20,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            // backgroundColor: "#fff",

                            padding: 10,
                        }}
                    >


                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate("Home")
                                this.props.navigation.navigate("Home", {
                                    page: 'able'
                                })


                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-around'
                            }}
                        >

                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                able
                            </Text>
                            {/* <FastBackwardOutlined /> */}
                            {/* <Icons
                                name='wifi'
                                size={30}
                                color={'green'}
                            /> */}

                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient colors={['#34CAA9', '#009BB1', '#058EBD']}
                        style={{
                            width: "90%", borderRadius: 20, justifyContent: "center"
                            , alignSelf: "center", marginTop: 20,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            // backgroundColor: "#fff",

                            padding: 10,
                        }}
                    >


                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate("Home")
                                this.props.navigation.navigate("Home", {
                                    page: 'disable'
                                })


                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-around'
                            }}
                        >

                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                disable
                            </Text>
                            {/* <i class="fas fa-wifi-slash"></i> */}
                            {/* <i class="fad fa-wifi-slash"></i> */}
                            {/* <FastBackwardOutlined /> */}
                            {/* <Icons
                                name='wifi-slash'
                                size={30}
                                color={'green'}
                            /> */}

                        </TouchableOpacity>
                    </LinearGradient>


                    <LinearGradient colors={['#34CAA9', '#009BB1', '#058EBD']}
                        style={{
                            width: "90%", borderRadius: 20, justifyContent: "center"
                            , alignSelf: "center", marginTop: 20,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            // backgroundColor: "#fff",

                            padding: 10,

                        }}
                    >


                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate("Home")
                                this.props.navigation.navigate("Home", {
                                    page: 'online'
                                })


                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-around'
                            }}
                        >

                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                online
                            </Text>
                            {/* <FastBackwardOutlined /> */}
                            {/* <Icons
                                name='bell'
                                size={30}
                                color={'green'}
                            /> */}

                        </TouchableOpacity>

                    </LinearGradient>

                    <LinearGradient colors={['#34CAA9', '#009BB1', '#058EBD']}
                        style={{
                            width: "90%", borderRadius: 20, justifyContent: "center"
                            , alignSelf: "center", marginTop: 20,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            // backgroundColor: "#fff",

                            padding: 10,

                        }}
                    >


                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate("Home")
                                this.props.navigation.navigate("Home", {
                                    page: 'offline'
                                })

                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-around'
                            }}
                        >

                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                offline
                            </Text>
                            {/* <FastBackwardOutlined /> */}
                            {/* <Icons
                                name='bell'
                                size={30}
                                color={'green'}
                            /> */}

                        </TouchableOpacity>

                    </LinearGradient>

                    

                </ScrollView>
                <TouchableOpacity
              style={{
                //  height: 30,
                alignItems: "center",
                justifyContent: "center",
                // paddingRight: 10,
                backgroundColor: "#00B3B3",
                // borderRadius: 10,
                paddingHorizontal: 10, 
                padding:10
            

              }}
              onPress={() => {
                // navigation.goBack()
                // setaddmodal(true)
                this.props.navigation.navigate('AddStore')
              }}
            >
              <Text style={{
                                fontSize: 22, textAlign: "center", color: "#fff",
                                fontFamily: FONTS.fontFamily
                            }}>
                                إضافة
                            </Text>
            </TouchableOpacity>
            </>
        )
    }
}