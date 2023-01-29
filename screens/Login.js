import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  AsyncStorage, 
  ActivityIndicator
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { COLORS, FONTS, images } from '../constants';

const { width, height } = Dimensions.get('window');

export default class ClassPage extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: false,
      secure: true,
      email: '',
      emailerr: '',
      pass: '',
      passerr: '',
      loading: false,
      securePass: '',
      bottomConnectionMsg: new Animated.Value(-100),
      connection_Status: 'Offline',
      loggedModal: false,
      resMassage: '',
    };
  }
  componentWillUnmount() {
    this._subscription && this._subscription();
  }
  async componentDidMount() {

    this._subscription = NetInfo.addEventListener(
      this._handelConnectionInfoChange,
    );
  }



  // end notification
  _handelConnectionInfoChange = (NetInfoState) => {
    if (NetInfoState.isConnected == true) {
      this.setState(({ }) => ({
        connection_Status: 'Online',
      }));
      Animated.spring(this.state.bottomConnectionMsg, {
        toValue: -100,
      }).start();
    } else {
      this.setState(({ }) => ({
        connection_Status: 'offline',
      }));
      Animated.spring(this.state.bottomConnectionMsg, { toValue: 0 }).start();
    }
  };

  setData = async (data, status) => {
    await AsyncStorage.setItem('AllData', JSON.stringify(data));
    await AsyncStorage.setItem('login', JSON.stringify(status));

  };

  async signin() {

// alert('login')
this.props.navigation.navigate("MainPage")
    // let data_to_send = {
    //   email: this.state.email,
    //   password: this.state.pass,
    //   doctor_token: '111111111111111',
    // };
    // this.setState({ loading: true });

    // if (this.state.connection_Status == 'Online') {

    //   axios
    //     .post('https://camp-coding.org/dentistry_app/doctor/authentication/doctor_login.php', data_to_send)
    //     .then((res) => {

    //       if (res.status == 200) {
    //         if (res.data == 'not_authorized') {
    //           this.setState({
    //             loggedModal: true,
    //             resMassage: 'البريد الالكتروني او كلمه السر غير صحيحه',
    //           });
    //         } else if (res.data == 'error') {
    //           this.setState({
    //             loggedModal: true,
    //             resMassage: 'عذرا يرجي المحاوله في وقت لاحق',
    //           });
    //         } else if (res.data == 'logged') {
    //           this.setState({
    //             loggedModal: true,
    //             resMassage:
    //               'هذا الحساب قيد نشط على هاتف اخر لايمكنك تسجيل الدخول فى الوقت الحالى',
    //           });
    //         } else {
    //           if (res.data.doctor_id) {

    //             this.props.navigation.navigate('GroupPage',
    //               {
    //                 allData: res.data,
    //                 doctor_id: res.data.doctor_id
    //               }
    //             );

    //             this.setData(res.data, 'logged');
    //           }
    //         }
    //       } else {
    //         this.setState({
    //           loggedModal: true,
    //           resMassage: 'عذرا يرجي المحاوله في وقت لاحق',
    //         });
    //       }
    //       this.setState({ loading: false });
    //     });
    // } else {
    //   this.setState({ loading: false });
    //   this.setState({
    //     loggedModal: true,
    //     resMassage: 'من فضلك تحقق من اتصالك بالأنترنت',
    //   });
    // }
  }

  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text });
      return false;
    } else {
      this.setState({ email: text });
      return true;
    }
  };
  checkbutton() {
    let error = 0;
    if (this.state.email.length != 0 ) {
      this.setState({ emailerr: '' });
    } else {
      error++;
      this.setState({ emailerr: 'ادخل ال id صحيح' });
    }

    if (this.state.pass.trim() == '') {
      error++;
      this.setState({ passerr: ' يجب ادخال كلمه المرور ' });
    } else {
      this.setState({ passerr: '' });
    }

    if (error === 0) {
      this.signin();
    }
  }

  render() {
    const { titleStyle, textTitleStyle, inputContainerView } = styles;
    const ViewConnectionMsg = (props) => {
      return (
        <Animated.View
          style={[
            styles.ConnectionView,
            { bottom: this.state.bottomConnectionMsg },
          ]}>
          <View>
            <Text style={{ color: 'white' }}>{props.ConnectionEnter}</Text>
          </View>
        </Animated.View>
      );
    };
    return (
      <View
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#009bb1"} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ backgroundColor: '#EFF1F0' }}>
            <ScrollView style={{ width: '100%', height: '100%' }}>
              {/* --------Logo picture------ */}
              {/* <View style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 25, backgroundColor: '#fff', borderRadius: 100 }} >
                <Image
                  source={Constants.AppLogo}
                  style={{ flex: 1, width: null, height: null, borderRadius: 100,borderWidth:2,borderColor:COLORS.primary }}
                />
              </View> */}
              {/* <View
                style={{
                  width: 108,
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 5,

                }}>
                <Image
                  source={images.AppLogo}
                  style={{ flex: 1, width: '100%', height: '100%' }}
                />
              </View> */}
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 32,
                  fontFamily:FONTS.fontFamily,
                  color: "#009bb1",
                  marginVertical: 20,
                  marginBottom: 100
                }}>
                Admin login
              </Text>

              {/* -------Textinput------- */}
              <View
                style={{
                  height: height * 0.15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* -----البريد الإلكترونى------ */}

                <View
                  style={{
                    width: '90%',
                    height: height * 0.07,
                    backgroundColor: '#DCDEDD',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '15%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily:FONTS.fontFamily

                    }}>
                    <FontAwesome5
                      color={"#009bb1"}
                      name="id-card"
                      size={24}
                    />
                  </View>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="أدخل ال id الخاص بك"
                    placeholderTextColor={"#ddd"}
                    keyboardType="email-address"

                    style={{
                      flex: 1,
                      paddingRight: 15,
                      backgroundColor: '#FFF',
                      marginLeft: 3,
                      fontFamily:FONTS.fontFamily
,
                      textAlign: 'right',
                      fontFamily: FONTS.fontFamily,
                      fontSize: 17,
                      color: "#000"
                    }}
                    value={this.state.email}

                    onChangeText={(value) => {
                      this.setState({
                        email: value,
                        emailerr: '',
                      });
                    }}
                  />
                </View>

                <Text
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    fontSize: 14,
                    fontWeight: '800',
                    fontFamily: FONTS.fontFamily,
                  }}>
                  {this.state.emailerr}
                </Text>
                {/* ---------الرقم السرى---------- */}

               
                <View
                  style={{
                    width: '90%',
                    height: height * 0.07,
                    backgroundColor: '#DCDEDD',
                    // justifyContent: "space-between",
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '15%',
                      height: height * 0.07,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <FontAwesome5
                      color={"#009bb1"}
                      name="lock"
                      size={24}
                    />
                  </View>

                  <TextInput
                    autoCapitalize="none"
                    placeholder="الرقم السري"
                    placeholderTextColor={"#ddd"}
                    secureTextEntry={!this.state.icon}
                    style={{
                      backgroundColor: '#FFFFFF',
                      flex: 1,
                      paddingRight: 15,
                      marginLeft: 3,
                      // fontFamily:FONTS.fontFamily,

                      width: '100%',
                      textAlign: 'right',
                      fontFamily: FONTS.fontFamily,
                      fontSize: 17,
                      color: "#000"
                    }}
                    value={this.state.pass}
                    onChangeText={(value) => {
                      this.setState({
                        pass: value,
                        passerr: '',
                      });
                    }}
                  />

                  <View
                    style={{
                      width: '15%',
                      height: height * 0.07,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#ddd',
                      opacity: 0.8,
                    }}>
                    <TouchableOpacity
                      onPress={async () => {
                        let x = this.state.icon;
                        this.setState({ icon: !x });
                      }}>
                      <FontAwesome5
                        name={this.state.icon ? 'eye' : 'eye-slash'}
                        size={20}
                        style={{ color: '#848687' }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 14,
                  fontWeight: '800',
                  fontFamily:FONTS.fontFamily
                  ,
                  marginTop: 5,
                  // marginBottom: 5,
                }}>
                {this.state.passerr}
              </Text>
              {/* --------forget------- */}
              <View
                style={{
                  height: height * 0.06,
                  // backgroundColor: "green",

                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: height * 0.05,
                }}>
                {/* <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgetPassword')
                  }>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      fontFamily: FONTS.fontFamily,
                    }}>
                    هل نسيت كلمة المرور ؟
                  </Text>
                </TouchableOpacity> */}
              </View>
              {/* ------login button----- */}
              <View
                style={{
                  width: '100%',
                  height: height * 0.1,
                  // backgroundColor: "blue",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.checkbutton();
                  }}
                  style={{
                    width: '85%',
                    height: height * 0.07,
                    backgroundColor: "#009bb1",
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: height * 0.01,
                  }}>
                  {this.state.loading ? (
                    <ActivityIndicator color="#fff" size={40} />
                  ) : (
                    <Text
                      style={{
                        // fontWeight: 'bold',
                        fontSize: 22,
                        color: '#fff',
                        fontFamily:FONTS.fontFamily
                        
                      }}>
                      دخول
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* -----------signin text----------- */}
              <View
                style={{
                  width: '100%',
                  height: height * 0.1,
                  // backgroundColor: "blue",
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                {/* <TouchableOpacity
                  disabled={this.state.loading}
                  onPress={() => {
                    this.props.navigation.navigate('Signup');
                  }}
                  style={{
                    width: '85%',
                    height: height * 0.07,
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                    backgroundColor: '#f7f7f7',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: height * 0.01,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: COLORS.primary,
                      fontFamily: FONTS.fontFamily,
                    }}>
                    إنشاء حساب
                  </Text>
                </TouchableOpacity> */}
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          visible={this.state.loggedModal}
          onRequestClose={() => {
            this.setState({ loggedModal: false });
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: width * 0.9,
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
                    fontFamily: FONTS.fontFamily,
                    color: "#009bb1",
                    fontSize: 22,
                  }}>
                  Saudi Ads
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

              <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: "#009bb1",
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  {this.state.resMassage}
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

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    this.setState({ loggedModal: false });
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamily,
                      color: "#009bb1",
                      fontSize: 20,
                    }}>
                    إلغاء
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <ViewConnectionMsg ConnectionEnter="لا يوجد اتصال بالأنترنت" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    width: '90%',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textTitleStyle: {
    fontSize: 40,
    fontFamily: FONTS.fontFamily,
    fontWeight: 'bold',
  },
  inputContainerView: {
    width: '90%',
    margin: '5%',
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 222,
    backgroundColor: "#009bb1",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
