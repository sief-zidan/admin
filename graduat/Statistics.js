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
    TextInput, Dimensions
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window');

export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {

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

            brand : '', 
            modal :'', 
            locat : '', 
            phnum:'',
            malfunctionmodal : false, 

            // winsh

            locwinsh :'', 
            phonewinsh :'',
            winshmodal : false, 
             
        }

    }
    render() {

        return (
            <>


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
                            <Icons
                                name='cart-plus'
                                size={70}
                                color='#fff'
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
                            <Icons
                                name='car-mechanic'
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
                            winch
                        </Text>
                    </View>

                </View>



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
                {/* */}




            </>

        )
    }
}

const styles = StyleSheet.create({

});