import React, { useRef, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, UIManager, Linking, LayoutAnimation,
  FlatList, Modal, ScrollView, Animated, TextInput, AsyncStorage, ImageBackground, ActivityIndicator
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from "react-native-vector-icons/FontAwesome5";
import Orders from './Orders';
import Icon from 'react-native-vector-icons/FontAwesome5';

const headerHeight = 1;
let scrollValue = 0;
let headerVisible = true;
let focused = false;
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const NewOrder = ({ navigation, route }) => {
  const [name, setname] = React.useState('');
  const [loading, setloading] = React.useState(false);
  // (true)
  const [showdate, setshowdate] = React.useState(false);
  const [chocendate, setchocendate] = React.useState('');

  const [modaldate, setmodaldate] = React.useState('');
  const [editmodal, seteditmodal] = React.useState(false);

  const [priceonEdit, setpriceonEdit] = React.useState('');

  const [choiceadd, setchoiceadd] = React.useState(false);

  const [neworder, setneworder] = React.useState([
    {

    }, {

    }, {

    }, {

    }, {

    }, {

    }, {

    }, {

    }
  ]);


  const [itemsofOrder, setitemofOrder] = React.useState([
    {
      name: 'ss',
      count: '15',
      editable: false
    }, {
      name: 'cc',
      count: '10',
      editable: false
    }, {
      name: 'aa',
      count: '18',
      editable: false
    }, {
      name: 'gg',
      count: '11',
      editable: false
    },
    {
      name: 'bb',
      count: '13',
      editable: false
    }, {
      name: 'ee',
      count: '18',
      editable: false
    }, {
      name: 'aa',
      count: '14',
      editable: false
    }, {
      name: 'jj',
      count: '17',
      editable: false
    },
  ])



  useEffect(() => {
    setloading(true)

    setTimeout(() => {
      setloading(false)
    }, 50);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])










  const animation = useRef(new Animated.Value(1)).current;
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });
  const inputTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerHeight / 4, 0],
  });
  const opacity = animation;
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

  function renderinvoice(item, index) {
    return (
      <>


        <Animatable.View
          key={item}
          animation="fadeInUp"
          delay={index * 100}
          useNativeDriver

          style={{

            width: '95%',
            borderRadius: SIZES.radius,
            alignSelf: 'center',
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding,
            paddingTop: 20,
            paddingBottom: 10,



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
            marginTop: 10
          }}
          onPress={() => {
          }}>




          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            // backgroundColor: '#f0f',
            marginTop: '2%',
          }}>


            <View style={{
              flex: 1,
            }}>





              <View style={{
                flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                borderColor: '#ddd', flexWrap: "wrap"
              }}>
                <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                  العنوان
                </Text>
                <Text
                  style={{
                    textAlign: 'auto',
                    fontFamily: FONTS.fontFamily,
                    alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                  }}>
                  {'this.state.orderPrice'}

                </Text>


              </View>



              <View style={{
                flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                borderColor: '#ddd'
              }}>
                <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                  رقم الهاتف
                </Text>
                <Text
                  style={{
                    textAlign: 'auto',
                    fontFamily: FONTS.fontFamily,
                    alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                  }}>
                  01111990710
                </Text>


              </View>

              <View style={{
                flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                borderColor: '#ddd'
              }}>
                <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                  وقت الطلب
                </Text>
                <Text
                  style={{
                    textAlign: 'auto',
                    fontFamily: FONTS.fontFamily,
                    alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                  }}>
                  {'13-08-2001'}
                </Text>


              </View>


              <TouchableOpacity
                onPress={() => {
                  seteditmodal(true)

                }}
                style={{
                  borderBottomWidth: .5,
                  borderColor: '#ddd', justifyContent: "center",
                  alignItems: "center"
                }}>
                <Text style={{
                  color: "#000", fontSize: 18,
                  fontFamily: FONTS.fontFamily
                }}>
                  منتجات الاوردر
                </Text>



              </TouchableOpacity>





              {/* </View> */}
            </View>
          </View>
        </Animatable.View>



      </>
    )
  }





  function Openedit(index) {
    let list1 = [...itemsofOrder]

    if (list1[index].editable == true) {
      list1[index].editable = false
    } else {
      for (var i = 0; i < list1.length; i++) {
        list1[i].editable = false
      }
      list1[index].editable = true
      setpriceonEdit(list1[index].count)

    }
    setitemofOrder(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }
  function deleteitem(index) {
    let list1 = [...itemsofOrder]

    list1.splice(0, index)
    setitemofOrder(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  }


  function savecountChange(index) {
    let list1 = [...itemsofOrder]

    list1[index].count = priceonEdit
    list1[index].editable = false
    setitemofOrder(list1)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

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


              }}>أوردرات الصيدلية</Text>
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
    <>
      {renderHeader()}

      {!loading ? (


        <View style={{
          paddingHorizontal: 10,
          backgroundColor: 'white',
          flex: 1,
          opacity: modaldate || editmodal ? .2 : null
        }}>


          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: headerHeight }}
            onScroll={onScroll}>
            <FlatList
              data={neworder}
              numColumns={1}
              renderItem={({ item, index }) => renderinvoice(item, index)} />
          </ScrollView>


        </View>

      ) : (
        <>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1
            }}
          >

            <ActivityIndicator
              size={50}
            />
          </View>
        </>
      )}



      <Modal
        visible={editmodal}
        // visible={true}

        onRequestClose={() => {
          seteditmodal(false)
        }}
        transparent={true}
        animationType='slide'
      >
        <View
          style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View
            style={{
              width: '90%',
              padding: 10,
              backgroundColor: '#ddd',
              elevation: 22,
              borderRadius: 15,
              flex: 1 / 1.2
            }}>


            <FlatList
              data={itemsofOrder}
              numColumns={1}
              renderItem={({ item, index }) => (




                <Animatable.View
                  key={item}
                  animation="fadeInUp"
                  delay={index * 100}
                  useNativeDriver

                >

                  <View



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

                      // elevation: 5,
                    }}
                    onPress={() => {



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
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Janna LT Bold',color: "#9F9FA0",

                            }}
                          >
                            {'بامبرز'}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Janna LT Bold',color: "#9F9FA0",

                            }}
                          >
                            {' الكمية : ' + item.count}
                          </Text>

                        </View>


                      </View>


                    </View>


                  </View>

                </Animatable.View>


              )} />


            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7,
              }}>
              <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                  seteditmodal(false)

                }}>
                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: '#f00',
                    fontSize: 20,
                  }}>
                  إلغاء
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 


      <Modal
        visible={modaldate}
        onRequestClose={() => {
          setmodaldate(false)

        }}
        transparent={true}
        animationType='slide'
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                  color: "#009bb1",
                  fontSize: 20,
                }}>
                {'حدد موعد وقت التسليم'}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: '90%',
                borderWidth: 1.5,
                borderColor: '#ddd',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setshowdate(true)
              }}
              style={{
                // alignItems: 'center',
                justifyContent: 'space-around',
                padding: 10,
                flexDirection: "row"
              }}>
              <Text
                style={{
                  fontFamily: 'Janna LT Bold',
                  color: "#9F9FA0",
                  fontSize: 20,
                }}>
                {'اضغط لتحديد موعد'}
              </Text>
              <Icons
                name='calendar-alt'
                style={{
                  alignSelf: "center",
                  marginLeft: -50
                }}
                size={20}
              />
             </TouchableOpacity>
            {chocendate != '' && showdate != true ? (
              <>

                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: "#9F9FA0",
                    fontSize: 15,
                    // marginLeft:
                    textAlign: "center"
                  }}>
                  {'ميعاد التسليم هو  ' + chocendate}
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: 'center', justifyContent: 'center',
                    // width:'50%'و 
                    backgroundColor: "#00cd7b",
                    borderRadius: 15,
                    marginBottom: 10,
                    width: '30%',
                    alignSelf: "center",
                    marginTop: 5
                  }}
                  onPress={() => {
                    setmodaldate(false)
                    setchocendate('')

                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#fff',
                      // padding: 5,
                      paddingHorizontal: 5,
                      fontSize: 20,
                    }}>
                    تأكيد
                  </Text>
                </TouchableOpacity>
              </>) : null}
            {
              showdate ? (
                <DateTimePicker
                  // testID={''}
                  value={new Date()}
                  mode={'date'}
                  display="default"
                  testID="dateTimePicker"
                  con
                  onChange={(value) => {
                    let d = new Date(value.nativeEvent.timestamp);
                    if (d.toString() != 'Invalid Date') {
                      let date = d.getFullYear() +
                        '-' +
                        (d.getMonth() + 1) +
                        '-' +
                        d.getDate()
                      setshowdate(false)

                      setchocendate(date)
                    } else {
                      setshowdate(false)

                    }
                    // alert(value)
                  }}
                />
              ) : null
            }



            <View
              style={{
                alignSelf: 'center',
                width: '90%',
                borderWidth: 1.5,
                borderColor: '#ddd',
              }}
            />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7,
              }}>
              <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                  setmodaldate(false)
                  setchocendate('')

                }}>
                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: '#f00',
                    fontSize: 20,
                  }}>
                  إلغاء
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

*/}

















    </>

  );
};
// ca-app-pub-7145760448631420/4764631156
export default NewOrder;

