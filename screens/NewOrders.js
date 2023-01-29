import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, UIManager, Linking, LayoutAnimation, 
  FlatList, Modal, ScrollView, Animated, TextInput, AsyncStorage, ImageBackground , ActivityIndicator} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
 import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from "react-native-vector-icons/FontAwesome5";
import Orders from './Orders';

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
  }, 1000);
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
                  اسم الصيدلية
                </Text>
                <Text
                  style={{
                    textAlign: 'auto',
                    fontFamily: FONTS.fontFamily,
                    alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                  }}>
                  {'الشروق'}
                </Text>


              </View>
              <View style={{
                flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                borderColor: '#ddd'
              }}>
                <Text style={{ color: "#000", fontSize: 18, fontFamily: FONTS.fontFamily }}>
                  المخزن
                </Text>
                <Text
                  style={{
                    textAlign: 'auto',
                    fontFamily: FONTS.fontFamily,
                    alignSelf: "center", fontSize: 15, color: "#9F9FA0"
                  }}>
                  {'حمادة'}
                </Text>


              </View>

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
              <View style={{
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



              </View>

              <TouchableOpacity
                onPress={() => {
                  // let daddr = `${garagDetils.latitude},${garagDetils.longitude}`;
                  // const company = Platform.OS === 'ios' ? 'apple' : 'google';
                  Linking.openURL(`google.navigation:q=${'daddr'}&avoid=tf`);
                }}
                style={{
                  // borderBottomWidth: .5,
                  borderColor: '#009bb1', justifyContent: 'space-around',
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: .5,
                  width: '70%',
                  alignSelf: "center"
                }}>
                <Text style={{
                  color: "#000", fontSize: 18,
                  fontFamily: FONTS.fontFamily
                }}>
                  عرض موقع الصيدلية
                </Text>
                {/* <i class="fas fa-map-marker-alt"></i> */}
                <Icons
                  name='map-marker-alt'
                  color={'#C2C05E'}
                  style={{
                    marginHorizontal: 20

                  }}
                  size={20}
                />


              </TouchableOpacity>



           {/*    <View
                style={{
                  alignItems: 'center',
                  justifyContent: "space-around",
                  marginTop: 7,
                  flexDirection: "row"
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center', justifyContent: 'center',
                    // width:'50%'و 
                    backgroundColor: "#00cd7b",
                    borderRadius: 15
                  }}
                  onPress={() => {
                    setmodaldate(true)

                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#fff',
                      padding: 5,
                      paddingHorizontal: 15,
                      fontSize: 20
                    }}>
                    قبول
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: "#C2C05E",
                    borderRadius: 15
                  }}
                  onPress={() => {
                    seteditmodal(true)

                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#fff',
                      padding: 5,
                      paddingHorizontal: 15,
                      fontSize: 20,
                    }}>
                    تعديل
                  </Text>
                </TouchableOpacity>
              </View>

 */}

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

    list1.splice(0,index)
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












  return (
    <>

{!loading?(


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

):(
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

{/* 

      <Modal
        visible={editmodal}
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
              backgroundColor: '#fff',
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

                      elevation: 5,
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
                              fontFamily: 'Janna LT Bold'
                            }}
                          >
                            {'بامبرز'}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Janna LT Bold'
                            }}
                          >
                            {' الكمية : ' + item.count}
                          </Text>

                        </View>


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
                            <Icons
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
                            <Icons
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
                          value={priceonEdit}
                          onChangeText={value => {
                            setpriceonEdit(value);

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

                            savecountChange(index)
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

                  </View>

                </Animatable.View>


              )} />
            <TouchableOpacity
              style={{
                alignItems: 'center', justifyContent: 'center',
                // width:'50%'و 
                backgroundColor: "#00cd7b",
                borderRadius: 10,
                // marginBottom: 5,
                width: '80%',
                alignSelf: "center",
                marginTop: 10
              }}
              onPress={() => {
                // setmodaldate(false)
                // setchocendate('')

              }}>
              <Text
                style={{
                  fontFamily: 'Janna LT Bold',
                  color: '#fff',
                  // padding: 5,
                  paddingHorizontal: 5,
                  fontSize: 20,
                }}>
                تأكيد التعديلات
              </Text>
            </TouchableOpacity>


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

