import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking, StatusBar, BackHandler, Modal
} from 'react-native';
import { COLORS, images, icons, SIZES, FONTS, constants } from '../constants';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
import Swiper from "react-native-swiper"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { garag1, garag2 } from '../constants/images';
const GaragDetils = (props, route) => {


  const [garagDetils, setGarageDetils] = React.useState(

    props.route.params.passedBannerDetails
  )

  const [modellink, setmodellink] = React.useState(

    false
  )

 

  
  function DetilsGarag() {
    return (

      <Animatable.View
        animation={"fadeInUp"}
        style={{ flex: 1, backgroundColor: "#fff", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      >



        <Image
          source={{ uri: garagDetils.image }}

          style={{
            width: '95%',
            // height: '90%',
            height: 150,
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 10,

          }}
          resizeMode='contain'
        />



        <View style={{
          // height: '10%',
          padding: 10,

        }}>
          <Text
            // numberOfLines={1}
            style={{ fontSize: 20, marginBottom: 5, color: "#444", fontFamily: FONTS.fontFamily }}>
            إسم البانر : {garagDetils.title}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              color: '#444',
              marginBottom: 5,
              fontFamily: FONTS.fontFamily

            }}>
            الوصف :  {garagDetils.description} LE
          </Text>

          <View
            style={{
              alignItems: 'center',
            }}>






            <TouchableOpacity
              onPress={() => {
                let daddr = `${garagDetils.coordinate.latitude},${garagDetils.coordinate.longitude}`;
                const company = Platform.OS === 'ios' ? 'apple' : 'google';
                Linking.openURL(`google.navigation:q=${daddr}&avoid=tf`);
              }}
              style={{
                width: '90%',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderColor: '#009bb1',
                borderWidth: 1,
                marginTop: 20,

              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#34CAA9',
                  fontFamily: FONTS.fontFamily
                }}>
                الحصول علي اتجاهات الموقع
              </Text>
            </TouchableOpacity>


          </View>
        </View>

      </Animatable.View >

    );
  }

















  function renderHeader() {
    return (
      <>

        <View style={{ width: width, height: height * 0.08, backgroundColor: "#009bb1", flexDirection: 'row' }} >
          <View style={{ flex: 1 }} />
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 19, fontFamily: FONTS.fontFamily }} >
              تفاصيل البانر
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack()
              }}>
              <Ionicons
                name="chevron-back"
                style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
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
        backgroundColor: "#fff",
        opacity : modellink ? .2 : null
      }}
    >
      <StatusBar backgroundColor={'#009bb1'} />
      {renderHeader()}
      {DetilsGarag()}

      <TouchableOpacity
        onPress={() => {
setmodellink(true)
        }}
        style={{
          width: '90%',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: '#009bb1',
          borderWidth: 1,
          // marginTop: 20,
          marginBottom: 10,
          alignSelf: "center"

        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#fff',
            fontFamily: FONTS.fontFamily
          }}>
          تمت الصيانة العودة للعمل مرة اخري
        </Text>
      </TouchableOpacity>



      <Modal
        visible={modellink}
        onRequestClose={() => {
          setmodellink(false)
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
                  color: "#000",
                  fontSize: 22,
                }}>
                {'تنبية'}
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

              }}
              style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
              <Text
                style={{
                  fontFamily: 'Janna LT Bold',
                  color: '#000',
                  fontSize: 17,
                  textAlign: 'center',
                }}>
                {'هل أنت متاكد من تفعيل البانر مرة اخري'}
              </Text>
            </TouchableOpacity>


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
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    setmodellink(false)

                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#0f0',
                      fontSize: 20,
                    }}>
                    تأكيد
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    setmodellink(false)

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
        </View>
      </Modal>





    </View>
  );
};

export default GaragDetils;
