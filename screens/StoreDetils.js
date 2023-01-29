
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
    FlatList, Image, Dimensions, StatusBar, PanResponder, Modal
} from 'react-native';

import { COLORS, images, icons, SIZES, FONTS, constants, Icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StoreDetils = ({ navigation, route }) => {




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
    
    
                  }}>{"مخزن "+ route.params.store_name} </Text>
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
    return (
        <View
            style={{
                flex: 1,
                // backgroundColor: COLORS.white,
            }}>
            <StatusBar backgroundColor={'#009bb1'} />

            {renderHeader()}


            <TouchableOpacity
                onPress={() => {
                navigation.navigate("Items")
                     

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

                    padding: 12
                }}
            >
                <Text style={{
                    fontSize: 22, textAlign: "center", color: "#000",
                    fontFamily: FONTS.fontFamily
                }}>
                    المنتجات
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                     

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

                    padding: 12
                }}
            >
                <Text style={{
                    fontSize: 22, textAlign: "center", color: "#000",
                    fontFamily: FONTS.fontFamily
                }}>
                    الاحصائيات
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                navigation.navigate("Orders")
                     

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

                     padding: 12
                 }}
             >
                 <Text style={{
                     fontSize: 22, textAlign: "center", color: "#000",
                     fontFamily: FONTS.fontFamily
                 }}>
                     الأوردرات
                 </Text>

             </TouchableOpacity>



        </View>
    );
};



export default StoreDetils;



