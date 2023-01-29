

import React, { Component } from 'react';
import {


  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert, Dimensions
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window');
import SMSVerifyCode from 'react-native-sms-verifycode'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      visibleModal_Login: false,
      visibleModal_SignUp: false,
      visibleModal_ForgetPassword: false,
      visibleModal_NewPassword: false,

      // main modal 
      main_modal: false,
      email: 'ahmedshahin@gmail.com',
      phone: '01111554781',
      modalinfo: false,

      // petrol
      modalpetrol: false,
      quantity: 0,
      location: '',
      tel: '',
      ch1: false,
      ch2: false,
      ch3: false,

      // malfunction

      brand: '',
      modal: '',
      locat: '',
      phnum: '',
      malfunctionmodal: false,

      // winsh

      locwinsh: '',
      phonewinsh: '',
      winshmodal: false,
      otp : false

    }

  }
  render() {

    return (
      <>
        <View style={{
          flex: 3,
          backgroundColor: "#000"
        }}>
          <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
            <Image
              style={{
                height: 250,
                width: 250,
              }}
              source={require('./logo.png')}
            />


          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ visibleModal_Login: true })
              }}
              style={{
                width: '80%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 20
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: "#ddd"
              }}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ visibleModal_SignUp: true })
              }}
              style={{
                width: '80%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

{/* القواءم الرئيسية */}
        <Modal
          visible={this.state.main_modal}
          onRequestClose={() => {
            this.setState({
              main_modal: false
            })
          }}
        >

          <View
            style={{
              flex: 1,
              backgroundColor: "#000"
            }}
          >

            <View

              style={{
                justifyContent: 'space-between',
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1d1d1d",
                flexDirection: "row",
              }}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800",
                  textAlign: "center", width: '90%',
                  marginRight: -15,
                  marginLeft: 15

                }}
              >
                Road Helper
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalinfo: true })
                }}
              >
                <Image
                  source={require('../assets/user.jpg')}
                  style={{
                    height: 25, width: 25,
                    marginRight: 30
                  }}
                />
              </TouchableOpacity>

            </View>
            <TouchableOpacity
            onPress={()=>{
              this.setState({
                main_modal: false
              })
            }}
              style={{
                flexDirection: "row",

                alignItems: "center"
              }}
            >

              <Icons
                name={"sign-out-alt"}
                size={30}
                color='#fff'
                style={{
                  marginLeft: 10
                }}
              />
              <Text style={{
                marginLeft: 10
              }}>
                Log out
              </Text>

            </TouchableOpacity>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
              }}
            >

              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalpetrol: true })

                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 100, width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: .5,
                  borderColor: "#ddd"
                }}
              >
                <Icons
                  name='gas-pump'
                  size={70}
                  color='#fff'
                />

              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800",



                }}
              >
                Petrol
              </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
              }}
            >

              <TouchableOpacity
                onPress={() => {
                  this.setState({ malfunctionmodal: true })

                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 100, width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: .5,
                  borderColor: "#ddd"
                }}
              >
              <Image
              source={require('./car.jpg')}
              style={{
                height:90,
                width:90
               
              }}
              />
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800",



                }}
              >
                malfunction
              </Text>
            </View>



            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
              }}
            >

              <TouchableOpacity
                onPress={() => {
                  this.setState({ winshmodal: true })

                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 100, width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: .5,
                  borderColor: "#ddd"
                }}
              >
               <Image
              source={require('./images.png')}
              style={{
                height:90,
                width:90
                
              }}
              />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800",



                }}
              >
                winch
              </Text>
            </View>

          </View>


        </Modal>
{/* تسجيل الدخول */}
        <Modal
          visible={this.state.visibleModal_Login}

          onRequestClose={() => {
            this.setState({ visibleModal_Login: false })
          }}>
          <View
            style={{
              backgroundColor: "#000",
              flex: 3
            }}>
            <ScrollView>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ visibleModal_Login: false })
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: '40%'

                }}>

                <Icons
                  name={"sign-out-alt"}
                  size={70}
                  color='#fff' />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Log In</Text>


              </View>

              <View style={{
                flex: 1
              }}>
                <View style={{
                  width: '80%',
                  height: 60,
                  backgroundColor: "#121212",
                  flexDirection: 'row',
                  // justifyContent:'center'
                  // alignItems:'center'
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginBottom: 20,
                  marginTop: 100
                }}>
                  <View
                    style={{
                      flex: .7,
                      backgroundColor: '#121212',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRightWidth: 1,
                      alignSelf: 'center'

                    }}
                  >
                    <TextInput
                      placeholder="Email"
                      keyboardType="email-address"

                      style={{
                        // flex: 1,
                        width: '100%',
                        paddingRight: 35,
                        // backgroundColor: '#FFF',
                        marginLeft: 33,

                        textAlign: 'left',
                        fontSize: 17,

                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: .3,
                      backgroundColor: '#121212',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRightWidth: 1

                    }}
                  >
                    <Icons
                      name={"envelope-square"}
                      size={30}
                      color='#fff' />
                  </View>

                </View>

                <View style={{
                  width: '80%',
                  height: 60,
                  backgroundColor: "#121212",
                  flexDirection: 'row',
                  // justifyContent:'center'
                  // alignItems:'center'
                  alignSelf: 'center',
                  borderRadius: 10
                }}>
                  <View
                    style={{
                      flex: .7,
                      // backgroundColor: '#121212',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRightWidth: 1,
                      alignSelf: 'center',
                      // borderTopLeftRadius:10

                    }}
                  >
                    <TextInput
                      placeholder="Password"
                      keyboardType="Password"
                      secureTextEntry={true}
                      style={{
                        // flex: 1,
                        width: '100%',
                        paddingRight: 35,
                        // backgroundColor: '#FFF',
                        marginLeft: 33,

                        textAlign: 'left',
                        fontSize: 17,

                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: .3,
                      backgroundColor: '#121212',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRightWidth: 1

                    }}
                  >
                    <Icons
                      name={"lock"}
                      size={30}
                      color='#fff' />
                  </View>

                </View>
                <TouchableOpacity

                  onPress={() => {
                    this.setState({ visibleModal_ForgetPassword: true })
                  }}
                  style={{
                    marginRight: 40,
                    marginTop: 10
                  }}


                >
                  <Text>Forget Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // this.setState({ visibleModal_SignUp: true })

                    this.setState({
                      main_modal: true
                    })

                  }}
                  style={{
                    width: '80%',
                    height: 60,
                    backgroundColor: "#2d62cc",
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginBottom: 10,
                    marginTop: 30
                  }}
                >
                  <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  marginRight: 40,
                  // marginTop: 10
                }}


                >
                  <Text>I don't have account ? Sign up  </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        </Modal>

{/* انشاء حساب */}

        <Modal
          visible={this.state.visibleModal_SignUp}

          onRequestClose={() => {
            this.setState({ visibleModal_SignUp: false })
          }}>


          <View
            style={{
              flex: 1,
              backgroundColor: "#000",
            }}>
            <View style={{
              height: '30%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 70
            }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                }}
                source={require('./user-icon.jpg')}
              />
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 30,
                color: "#ddd"
              }}>Create Account</Text>
            </View>

            <View style={{
              width: '80%',
              height: 60,
              backgroundColor: "#121212",
              flexDirection: 'row',
              // justifyContent:'center'
              // alignItems:'center'
              alignSelf: 'center',
              borderRadius: 10,
              marginBottom: 20,
              marginTop: 100
            }}>
              <View
                style={{
                  flex: .7,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  alignSelf: 'center'

                }}
              >
                <TextInput
                  placeholder="User Name"
                  keyboardType="email-address"
                  placeholderTextColor={'#ddd'}
                  style={{
                    // flex: 1,
                    width: '100%',
                    paddingRight: 35,
                    // backgroundColor: '#FFF',
                    marginLeft: 33,

                    textAlign: 'left',
                    fontSize: 17,

                  }}
                />
              </View>
              <View
                style={{
                  flex: .3,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1

                }}
              >
                <Icons
                  name={"user"}
                  size={30}
                  color='#fff' />
              </View>

            </View>


            <View style={{
              width: '80%',
              height: 60,
              backgroundColor: "#121212",
              flexDirection: 'row',
              // justifyContent:'center'
              // alignItems:'center'
              alignSelf: 'center',
              borderRadius: 10,
              marginBottom: 20,
              // marginTop: 100
            }}>
              <View
                style={{
                  flex: .7,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  alignSelf: 'center'

                }}
              >
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor={'#ddd'}

                  style={{
                    // flex: 1,
                    width: '100%',
                    paddingRight: 35,
                    // backgroundColor: '#FFF',
                    marginLeft: 33,

                    textAlign: 'left',
                    fontSize: 17,

                  }}
                />
              </View>
              <View
                style={{
                  flex: .3,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1

                }}
              >
                <Icons
                  name={"envelope-square"}
                  size={30}
                  color='#fff' />
              </View>

            </View>

            <TouchableOpacity
              onPress={() => {
                // this.setState({ visibleModal_SignUp: true })
              }}
              style={{
                width: '80%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 30
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Continue</Text>
            </TouchableOpacity>


          </View>
        </Modal>


{/* نسيت كلمة السر */}

        <Modal
          visible={this.state.visibleModal_ForgetPassword}

          onRequestClose={() => {
            this.setState({ visibleModal_ForgetPassword: false })
          }}>


          <View
            style={{
              backgroundColor: '#000',
              flex: 1
            }}
          >

            <TouchableOpacity

              onPress={() => {
                this.setState({ visibleModal_ForgetPassword: false })

              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 20,
                marginTop: 30,
                marginBottom: 50
              }}>
              <Text style={{ marginRight: 5, fontSize: 20, color: '#ddd' }}>Back</Text>
              <Icons name='chevron-left' color='#ddd' size={30} />

            </TouchableOpacity>


            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: "center",
              marginTop: 100
            }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ddd' }}>Password Recovery</Text>
            </View>

            <View style={{
              width: '80%',
              height: 60,
              backgroundColor: "#121212",
              flexDirection: 'row',
              // justifyContent:'center'
              // alignItems:'center'
              alignSelf: 'center',
              borderRadius: 10,
              marginBottom: 20,
              marginTop: 100
            }}>
              <View
                style={{
                  flex: .7,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  alignSelf: 'center'

                }}
              >
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor={'#ddd'}
                  style={{
                    // flex: 1,
                    width: '100%',
                    paddingRight: 35,
                    // backgroundColor: '#FFF',
                    marginLeft: 33,

                    textAlign: 'left',
                    fontSize: 17,

                  }}
                />
              </View>
              <View
                style={{
                  flex: .3,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1

                }}
              >
                <Icons
                  name={"envelope-square"}
                  size={30}
                  color='#fff' />
              </View>

            </View>

            <TouchableOpacity
              onPress={() => {
                this.setState({ otp: true })
                // Alert.alert("صفحه ارسال الكود")
              }}
              style={{
                width: '80%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 30
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Send Code</Text>
            </TouchableOpacity>

          </View>
        </Modal>

{/* باسوورد جديد */}

        <Modal
          visible={this.state.visibleModal_NewPassword}

          onRequestClose={() => {
            this.setState({ visibleModal_NewPassword: false })
          }}>


          <View
            style={{
              backgroundColor: '#000',
              flex: 1
            }}
          >

            <TouchableOpacity

              onPress={() => {
                this.setState({ visibleModal_NewPassword: false })

              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 20,
                marginTop: 30,
                marginBottom: 50
              }}>
              <Text style={{ marginRight: 5, fontSize: 20, color: '#ddd' }}>Back</Text>
              <Icons name='chevron-left' color='#ddd' size={30} />

            </TouchableOpacity>


            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: "center",
              marginTop: 100
            }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ddd' }}>New Password</Text>
            </View>

            <Text style={{ marginRight: 50, marginTop: 50, marginBottom: 5, color: '#ddd' }}>Password</Text>
            <View style={{
              width: '80%',
              height: 60,
              backgroundColor: "#121212",
              flexDirection: 'row',
              // justifyContent:'center'
              // alignItems:'center'
              alignSelf: 'center',
              borderRadius: 10,
              // marginTop:50
              marginBottom: 30
            }}>
              <View
                style={{
                  flex: .7,
                  // backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  alignSelf: 'center',
                  // borderTopLeftRadius:10

                }}
              >
                <TextInput
                  placeholder="Password"
                  keyboardType="Password"
                  placeholderTextColor={'#ddd'}
                  secureTextEntry={true}
                  style={{
                    // flex: 1,
                    width: '100%',
                    paddingRight: 35,
                    // backgroundColor: '#FFF',
                    marginLeft: 33,

                    textAlign: 'left',
                    fontSize: 17,

                  }}
                />
              </View>
              <View
                style={{
                  flex: .3,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1

                }}
              >
                <Icons
                  name={"lock"}
                  size={30}
                  color='#fff' />
              </View>

            </View>

            <Text style={{ marginRight: 50, marginBottom: 5, color: '#ddd' }}>Confirm Password</Text>

            <View style={{
              width: '80%',
              height: 60,
              backgroundColor: "#121212",
              flexDirection: 'row',
              // justifyContent:'center'
              // alignItems:'center'
              alignSelf: 'center',
              borderRadius: 10
            }}>
              <View
                style={{
                  flex: .7,
                  // backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  alignSelf: 'center',
                  // borderTopLeftRadius:10

                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'#ddd'}
                  keyboardType="Password"
                  secureTextEntry={true}
                  style={{
                    // flex: 1,
                    width: '100%',
                    paddingRight: 35,
                    // backgroundColor: '#FFF',
                    marginLeft: 33,

                    textAlign: 'left',
                    fontSize: 17,

                  }}
                />
              </View>
              <View
                style={{
                  flex: .3,
                  backgroundColor: '#121212',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1

                }}
              >
                <Icons
                  name={"lock"}
                  size={30}
                  color='#fff' />
              </View>

            </View>

            <TouchableOpacity
              onPress={() => {
                // this.setState({ visibleModal_ResendCode: true })
                alert("0")
                // Alert.alert("صفحه ارسال الكود")
              }}
              style={{
                width: '80%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 30
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Change Password</Text>
            </TouchableOpacity>

          </View>
        </Modal>

{/* مودبل الونش */}
        <Modal
          visible={
            this.state.winshmodal
          }
          animationType={'slide'}
          onRequestClose={() => {
            this.setState({ winshmodal: false })
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000"
            }}
          >

            <View

              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1d1d1d"
              }}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800"
                }}
              >
                Winsh
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ winshmodal: false })

              }}
              style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: "center",
                marginRight: 10
              }}
            >


              <Text
                style={{
                  fontSize: 20,
                  padding: 5,

                }}
              >
                Back
              </Text>
              <Icons
                name='chevron-left'
                color={"#ddd"}
                size={18}
              />
            </TouchableOpacity>













            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 50,
              }}
            >
              Location
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter Location'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.locwinsh}

                onChangeText={(value) => {
                  this.setState({
                    locwinsh: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="map-marker-alt"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              telephone
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#7066669e"}
                placeholder='enter phone'
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.phonewinsh}

                onChangeText={(value) => {
                  this.setState({
                    phonewinsh: value,
                  });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>

                <Icons
                  color={"#ddd"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>

            {/* map-marker-alt */}






            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.locwinsh.length > 0 && this.state.phonewinsh.length > 0
                ) {
                  alert('done')
                } else {
                  alert('invalid data')

                }
              }}
              style={{
                width: '50%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Modal>

{/* مودبل تصليح العربية */}
        <Modal
          visible={
            this.state.malfunctionmodal
          }
          animationType={'slide'}
          onRequestClose={() => {
            this.setState({ malfunctionmodal: false })
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000"
            }}
          >

            <View

              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1d1d1d"
              }}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800"
                }}
              >
                malfunction
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ malfunctionmodal: false })

              }}
              style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: "center",
                marginRight: 10
              }}
            >


              <Text
                style={{
                  fontSize: 20,
                  padding: 5,

                }}
              >
                Back
              </Text>
              <Icons
                name='chevron-left'
                color={"#ddd"}
                size={18}
              />
            </TouchableOpacity>













            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              brand
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter car brand'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.brand}

                onChangeText={(value) => {
                  this.setState({
                    brand: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="car"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              modal
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#7066669e"}
                placeholder='enter car modal'
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.modal}

                onChangeText={(value) => {
                  this.setState({
                    modal: value,
                  });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>

                <Icons
                  color={"#ddd"}
                  name="car"
                  size={24}
                />
              </View>
            </View>

            {/* map-marker-alt */}






            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              Location
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter location'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.locat}

                onChangeText={(value) => {
                  this.setState({
                    locat: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="map-marker-alt"
                  size={24}
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              telephone
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter phone'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.phnum}

                onChangeText={(value) => {
                  this.setState({
                    phnum: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.brand.length > 0 && this.state.modal.length > 0 && this.state.locat.length > 0 && this.state.phnum.length > 0
                ) {
                  alert('done')
                } else {
                  alert('invalid data')

                }
              }}
              style={{
                width: '50%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Modal>

{/* موديل بنزين العربية */}
        <Modal
          visible={
            this.state.modalpetrol
          }
          animationType={'slide'}
          onRequestClose={() => {
            this.setState({ modalpetrol: false })
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000"
            }}
          >

            <View

              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1d1d1d"
              }}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800"
                }}
              >
                Petrol
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalpetrol: false })

              }}
              style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: "center",
                marginRight: 10
              }}
            >


              <Text
                style={{
                  fontSize: 20,
                  padding: 5,

                }}
              >
                Back
              </Text>
              <Icons
                name='chevron-left'
                color={"#ddd"}
                size={18}
              />
            </TouchableOpacity>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              Type
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >



              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: false,
                    ch2: false,
                    ch3: true
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60, width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch3 ? '#0f0' : "#ddd"

                }}
              >
                <Text
                  style={{
                    fontSize: 20
                  }}
                >
                  95
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: false,
                    ch2: true,
                    ch3: false
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60, width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch2 ? '#0f0' : "#ddd"

                }}
              >
                <Text
                  style={{
                    fontSize: 20
                  }}
                >
                  90
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: true,
                    ch2: false,
                    ch3: false
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60, width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch1 ? '#0f0' : "#ddd"
                }}
              >
                <Text
                  style={{
                    fontSize: 20
                  }}
                >
                  80
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>

            </View>














            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              Quantity
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter value by leter'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.quantity}

                onChangeText={(value) => {
                  this.setState({
                    quantity: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="gas-pump"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              location
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#7066669e"}
                placeholder='enter location'
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.location}

                onChangeText={(value) => {
                  this.setState({
                    location: value,
                  });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>

                <Icons
                  color={"#ddd"}
                  name="map-marker-alt"
                  size={24}
                />
              </View>
            </View>








            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              telephone
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"
                keyboardType='number-pad'

                placeholderTextColor={"#7066669e"}
                placeholder='enter phone'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.tel}

                onChangeText={(value) => {
                  this.setState({
                    tel: value,

                  });
                }}
              />

              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.quantity > 0 && this.state.location.length > 0 && this.state.tel.length > 0
                ) {
                  alert('done')
                } else {
                  alert('invalid data')

                }
              }}
              style={{
                width: '50%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20
              }}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Modal>

{/* المعلومات الشخصية */}
        <Modal
          visible={
            this.state.modalinfo
          }
          animationType={'slide'}
          onRequestClose={() => {
            this.setState({ modalinfo: false })
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000"
            }}
          >

            <View

              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1d1d1d"
              }}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800"
                }}
              >
                Profile
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalinfo: false })

              }}
              style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: "center",
                marginRight: 10
              }}
            >


              <Text
                style={{
                  fontSize: 20,
                  padding: 5,

                }}
              >
                Back
              </Text>
              <Icons
                name='chevron-left'
                color={"#ddd"}
                size={18}
              />
            </TouchableOpacity>




            <View
              style={{
                alignSelf: "center",
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require('../assets/user.jpg')}
                style={{
                  height: 120, width: 120
                }}
              />
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800"
                }}
              >
                Ahmed Shahin
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              Email
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#ddd"}
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.email}

                onChangeText={(value) => {
                  // this.setState({
                  //     email: value,
                  //     emailerr: '',
                  // });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="envelope"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
              }}
            >
              telephone
            </Text>
            <View
              style={{
                width: '90%',
                height: height * 0.07,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#ddd"}
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.phone}

                onChangeText={(value) => {
                  // this.setState({
                  //     email: value,
                  //     emailerr: '',
                  // });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#ddd"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>


          </View>
        </Modal>


        {/* كود التاكيد */}
        <Modal
        visible={this.state.otp}
        onRequestClose={()=>{
          this.setState({otp : false})
        }}
        animationType='slide'
        >
 <View
                    style={{
                        flex: 1,
                        backgroundColor: "#000"
                    }}
                >

                    <View

                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#1d1d1d"
                        }}>
                        <Text
                            style={{
                                fontSize: 23,
                                padding: 12,
                                fontWeight: "800"
                            }}
                        >
                            Code
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ malfunctionmodal: false })

                        }}
                        style={{
                            flexDirection: "row",
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            marginRight: 10
                        }}
                    >


                        <Text
                            style={{
                                fontSize: 20,
                                padding: 5,

                            }}
                        >
                            Back
                        </Text>
                        <Icons
                            name='chevron-left'
                            color={"#ddd"}
                            size={18}
                        />
                    </TouchableOpacity>

                    <View
                        style={{
                            alignSelf: "center",
                            marginTop: 30,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 23,
                                padding: 12,
                                fontWeight: "800"
                            }}
                        >
                            Enter Code
                        </Text>
                        <Text
                            style={{

                                fontWeight: "800"
                            }}
                        >
                            the code has been send to email
                        </Text>
                    </View>
                     <SMSVerifyCode
                        verifyCodeLength={4}
                        containerPaddingVertical={10}
                        containerPaddingHorizontal={50}
                        containerBackgroundColor={'#000'}
                        
                        codeColor={'#fff'}
                        onInputCompleted={() => {
                           alert('done')
                        }}
                        
                    />    
                        <TouchableOpacity
                            onPress={() => {
                this.setState({ visibleModal_NewPassword: true })
                             
                            }}
                            style={{
                                width: '80%',
                                height: 60,
                                backgroundColor: "#2d62cc",
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginTop: 20
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>verify</Text>
                        </TouchableOpacity>
                </View>

        </Modal>
      </>

    )
  }
}

const styles = StyleSheet.create({

});