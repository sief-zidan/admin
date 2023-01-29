import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Statistics extends React.Component {



    constructor() {
        super()
        this.state = {
            data: [
                {
                    item: 'عدد المخازن',
                    val: 50,
                    cato: ''
                }, {
                    item: 'عدد الاوردرات',
                    val: 150,
                    cato: 'all'
                }, {
                    item: 'الاوردرات المنتهية',
                    val: 50,
                    cato: 'finish'
                }, {
                    item: 'الاوردرات المرفوضة',
                    val: 75,
                    cato: 'block'
                }, {
                    item: 'أوردرات تم إلغائها',
                    val: 25,
                    cato: 'cancle'
                }, {
                    item: 'معدل الظهور في البحث',
                    val: 50,
                    cato: ''
                }, {
                    item: 'عدد الصيدليات',
                    val: 50,
                    cato: ''
                }

            ],
            total_payd: 0,
            loading: false,
            ordermatrial: '',
            orderPrice: '',
            worker_salary: "",
            allorder: 0,
            refuseorder: 0,
            cancleorder: 0,
            doneorder: 0
        }
    }

    componentDidMount() {

        this.get_deatils()

    }
    get_deatils() {
        let data = this.state.data

        allorder = 0,
            refuseorder = 0,
            cancleorder = 0,
            doneorder = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].cato == 'all') {
                allorder += data[i].val
            }
            if (data[i].cato == 'finish') {
                doneorder += data[i].val
            }
            if (data[i].cato == 'block') {
                refuseorder += data[i].val
            }
            if (data[i].cato == 'cancle') {
                cancleorder += data[i].val
            }


        }
        this.setState({
            allorder,
            refuseorder,
            cancleorder,
            doneorder
        })
    }





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
                                إحصائيات
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













                {this.state.loading ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ActivityIndicator
                            size={40}
                        />
                    </View>
                ) : (
                    <>
                        <ScrollView
                            contentContainerStyle={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-around"
                            }}
                        >


                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >




                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'عدد المخازن'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {'50'}
                                </Text>


                            </Animatable.View>
                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >



                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'عدد الاوردرات'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {'150'}
                                </Text>


                            </Animatable.View>
                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >


                                <AnimatedCircularProgress
                                    size={100}
                                    width={5}
                                    fill={(this.state.data[2].val / this.state.allorder) * 100}
                                    tintColor="#009bb1"
                                    duration={2000}
                                    rotation={0}
                                    backgroundColor="#ddd">
                                    {
                                        (fill) => (
                                            <Text style={{
                                                fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                  
                                              }}>
                                                {this.state.data[2].val}%

                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>

                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'الاوردرات المنتهية'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {this.state.data[2].val}

                                </Text>


                            </Animatable.View>
                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >


                                <AnimatedCircularProgress
                                    size={100}
                                    width={5}
                                    fill={(this.state.data[3].val / this.state.allorder) * 100}
                                    tintColor="#009bb1"
                                    duration={2000}
                                    rotation={0}
                                    backgroundColor="#ddd">
                                    {
                                        (fill) => (
                                            <Text style={{
                                                fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                  
                                              }}>
                                                {this.state.data[3].val}%
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>

                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'الاوردرات المرفوضة'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {'75'}
                                </Text>


                            </Animatable.View>
                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >


                                <AnimatedCircularProgress
                                    size={100}
                                    width={5}
                                    fill={(this.state.data[4].val / this.state.allorder) * 100}
                                    tintColor="#009bb1"
                                    duration={2000}
                                    rotation={0}
                                    backgroundColor="#ddd">
                                    {
                                        (fill) => (
                                            <Text style={{
                                                fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                  
                                              }}>
                                           {this.state.data[4].val}%

                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>

                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'أوردرات تم إلغائها'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                  {this.state.data[4].val}
                                </Text>


                            </Animatable.View>
                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >


                                <AnimatedCircularProgress
                                    size={100}
                                    width={5}
                                    fill={(75/100 )* 100}
                                    tintColor="#009bb1"
                                    duration={2000}
                                    rotation={0}
                                    backgroundColor="#ddd">
                                    {
                                        (fill) => (
                                            <Text style={{
                                                fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                  
                                              }}>
                                                75%
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>

                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'معدل الظهور في البحث'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {'75'}
                                </Text>


                            </Animatable.View>

                            <Animatable.View

                                animation="fadeIn"

                                useNativeDriver
                                style={{

                                    width: '45%',
                                    borderRadius: SIZES.radius,
                                    // alignSelf: 'center',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.padding,
                                    padding: 4,



                                    backgroundColor: COLORS.white,
                                    marginVertical: SIZES.base,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                    // marginLeft:10
                                }}
                            >




                                <Text style={{
                                    color: "#000",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'عدد الصيدليات'}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'auto',
                                        fontFamily: FONTS.fontFamily,
                                        alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                    }}>
                                    {'100'}
                                </Text>


                            </Animatable.View>
                        </ScrollView>




                        {/* 
                                    <View style={{
                                        flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                                        borderColor: '#ddd'
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            عدد الاوردرات
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'auto',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                            }}>
                                            {30}

                                        </Text>


                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                                        borderColor: '#ddd'
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            الاوردرات المنتهية
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'auto',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                            }}>
                                            {50}
                                        </Text>


                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                                        borderColor: '#ddd'
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            الاوردرات المرفوضة
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'auto',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                            }}>
                                            {50}
                                        </Text>


                                    </View>



                                    <View style={{
                                        flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                                        borderColor: '#ddd'
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            عدد الصيدليات
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'auto',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                            }}>
                                            {20}
                                        </Text>


                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                                        borderColor: '#ddd'
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            عدد المخازن
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'auto',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                                            }}>
                                            {50}
                                        </Text>


                                    </View>

                                    */}


                        {/* <View style={{
                                        justifyContent: 'space-between',
                                        marginVertical: 30
                                    }}>
                                        <Text style={{ textAlign: 'center', color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                                            صافي ربح الشهر
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: FONTS.fontFamily,
                                                alignSelf: "center", fontSize: 15, color: "#845EC2"
                                            }}>

                                            {parseFloat(this.state.orderPrice) - parseFloat(this.state.ordermatrial) - parseFloat(this.state.worker_salary)}
                                        </Text>


                                    </View> */}




                        {/* </View> */}


                    </>
                )}




























            </>
        )
    }
}



const styles = StyleSheet.create({
    connectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderContainer: {
        // height: height * 0.32,
        width: '100%',
        // backgroundColor: '#f00',
        marginTop: '1%',
        shadowColor: '#000',
        paddingVertical: '1%',
        paddingHorizontal: '1%',
        // marginVertical:"%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10,
    },
    orderIdConatiner: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '2%',
        // backgroundColor:"#f00"
    },
    timeStatus: {
        flex: 2,
        alignItems: 'flex-end',

        paddingRight: '4%',
        //  backgroundColor:"#f0f"
    },
    orderAddress: {
        // flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: '#f0f',
        marginTop: '2%',
    },
    pinIcon: {
        // flex: 1,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addressContainer: {
        flex: 1,
    },
});

