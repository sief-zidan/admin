import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

import Icons from 'react-native-vector-icons/FontAwesome5';


export default class MainPage extends React.Component {

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
                            padding: 5,
                        }}
                    >
 
                        <View
                            style={{
                            }}
                        >


                            <Text style={{
                                color: '#fff',
                                fontSize: 25,
                                textAlign: "center", 
                                fontFamily:FONTS.fontFamily

                            }}>الرئيسية</Text>
                        </View>



                    </View>


                </View>

                <ScrollView>

                    

                    <TouchableOpacity
                        onPress={() => {
                            // this.props.navigation.navigate("Home")
                            this.props.navigation.navigate("Storestaps")

                            
                        }}
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
                            backgroundColor: "#fff",

padding:15
                        }}
                    >
                        <Text style={{
                            fontSize: 22, textAlign: "center", color: "#000",
                            fontFamily: FONTS.fontFamily
                        }}>
                            المخازن
                        </Text>

                    </TouchableOpacity>

                   
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Pharmacy")
                        }}
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
                            backgroundColor: "#fff",

                            marginBottom: 20,
                            flexDirection: "column", 
                            padding:15
                        }}
                    >
                        <Text style={{
                            fontSize: 22, textAlign: "center", color: "#000",
                            fontFamily: FONTS.fontFamily
                        }}>
                            الصيدليات

                        </Text>
                       
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Statistics")
                        }}
                        style={{
                         width: "90%", borderRadius: 20, justifyContent: "center"
                            , alignSelf: "center",  
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#fff",

                            marginBottom: 20,
                            flexDirection: "column", 
                            padding:15
                        }}
                    >
                        <Text style={{
                            fontSize: 22, textAlign: "center", color: "#000",
                            fontFamily: FONTS.fontFamily
                        }}>
                            الاحصائيات

                        </Text>
                       
                    </TouchableOpacity>
                   
                </ScrollView>
            </>
        )
    }
}