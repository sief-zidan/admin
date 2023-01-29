import axios from 'axios';
import * as React from 'react';
import {
  Text, View, StatusBar, Image, ActivityIndicator, Modal,
  Dimensions, TouchableOpacity, BackHandler
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

// import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');

import { COLORS, images, icons, SIZES, FONTS, constants } from '../constants';
export default class SwitchControle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      Modal_msg: "",
      modal_vis: false , 
      connection_Status :""
    }
  }
  componentDidMount() {
    const unsubscribe = NetInfo.addEventListener(async (state) => {
      if (state.isConnected == true) {
        this.getPrimissionGo()
        this.setState({
          connection_Status: 'Online',
        });
      } else {
        this.setState({
          connection_Status: 'Offline',
          loading: true
        });
      }
    });
   
  };
  getPrimissionGo() {
    this.setState({ loading: true })
    this.props.navigation.navigate("Home")
    axios.get('https://grag-app.000webhostapp.com/mit_grage/lock_app.php').then((res) => {

      if (res.status == 200) {
 
        if (res.data == 'success') {
         
          this.setState({ loading: false })
        } else if ("rejected") {

          this.setState({ modal_vis: true, Modal_msg: 'غير مصرح لك بدخول التطبيق الرجاء التواصل مع المطورين ...' })

        } else {
          this.setState({ modal_vis: true, Modal_msg: "حدث خطأ ما الرجاء المحاولة لاحقا" })

        }
      } else {
        this.setState({ modal_vis: true, Modal_msg: "حدث خطأ ما الرجاء المحاولة لاحقا" })

      }

    })
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#009bb1'} />

        
           
{
  this.state.loading ?(
<View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
             <ActivityIndicator
            size={40}
            color='#009bb1'
          />
        </View>
  ) : null
}
         

        <Modal
          visible={this.state.modal_vis}
          onRequestClose={() => {
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
                    color: "#487DBE",
                    fontSize: 22,
                  }}>
                  El Garag
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

              <View style={{ paddingHorizontal: 20, paddingVertical: 12, justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    color: "#009bb1",
                    fontSize: 20,
                    textAlign: 'center',
                    width: "80%"
                  }}>
                  {this.state.Modal_msg}
                </Text>
              </View>



              <TouchableOpacity
                style={{
                  width: '40%',
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: "#00B3B3",
                  borderRadius: 10,
                  elevation: 3,
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
                onPress={() => {


                  BackHandler.exitApp()
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 18,
                  }}>
                  حسناّ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
