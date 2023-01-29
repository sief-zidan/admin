import React, { useRef, useEffect } from 'react';
import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View, FlatList, TouchableOpacity, Image, Switch, Modal,BackHandler
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Icons from 'react-native-vector-icons/FontAwesome5';
const headerHeight = 100;
let scrollValue = 0;
let headerVisible = true;
let focused = false;
import * as Animatable from 'react-native-animatable';

const Items = ({ navigation, route }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitchadd = () => setIsEnabled(previousState => !previousState);

    const [choiceadd, setchoiceadd] = React.useState(false);

    const [addmodal, setaddmodal] = React.useState(false);
    const [itemname, setitemname] = React.useState('');
    const [price, setprice] = React.useState('');
    const [describtion, setdescribtion] = React.useState('');


    const [name, setname] = React.useState('');

    const [OriginalPlayers, setOriginalPlayers] = React.useState('');

    const [players, setplayers] = React.useState([
        {
            name: 'sssssssssssss',
            id: '15',
            avilable: false
        }, {
            name: 'cc',
            id: '10',
            avilable: false
        }, {
            name: 'aa',
            id: '18',
            avilable: false
        }, {
            name: 'gg',
            id: '11',
            avilable: false
        },
        {
            name: 'bb',
            id: '13',
            avilable: false
        }, {
            name: 'ee',
            id: '18',
            avilable: false
        }, {
            name: 'aa',
            id: '14',
            avilable: false
        }, {
            name: 'jj',
            id: '17',
            avilable: false
        },
    ])

    const [playeropj, setplayeropj] = React.useState({});


 
    
      useEffect(() => {
      
        let data = players
        for (let i = 0; i < data.length; i++) {
            data[i].show = true
        }
        setplayers(data)
        setOriginalPlayers(data)
          
      }, []);
  

    function MakeSearchRequst(text) {
        let list1 = players

        for (let i = 0; i < list1.length; i++) {
            if (list1[i].id.includes(text)) {
                list1[i].show = true
            } else {
                list1[i].show = false

            }
        }
        setplayers(list1)
        setOriginalPlayers(list1)

    }

    function toggleSwitch(index) {
        let list1 = [...players]
        list1[index].avilable = !list1[index].avilable

        setplayers(list1)
        setOriginalPlayers(list1)

    }


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
                {item.show ? (
                    <Animatable.View
                        key={item}
                        animation={index % 2 == 0 ?"fadeInRightBig" : 'fadeInLeftBig'}
                        delay={index * 100}
                        useNativeDriver

                    >

                        <TouchableOpacity



                            style={{

                                width: '95%',
                                borderRadius: SIZES.radius,
                                alignSelf: 'center',
                                padding: 10,



                                backgroundColor: COLORS.white,
                                marginVertical: SIZES.base,
                                shadowColor: '#fff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                // shadowOpacity: 0.25,
                                // shadowRadius: 3.84,

                                elevation: 2,
                            }}
                            onPress={() => {
                                // setitemname(item.name)
                                // setprice(item.id)
                                // setdescribtion(item.describtion)
                                // setIsEnabled(item.avilable)
                                // setaddmodal(true)


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





                                    <Text
                                        style={{
                                            fontFamily: 'Janna LT Bold',
                                            color: "#9F9FA0",
                                        }}
                                    >
                                        {'بامبرز'}
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                                    }}
                                >
                                    {item.id} LE
                                </Text>

                            </View>
                            {/* <View
                                style={{

                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                                    }}
                                >
                                    {'متاح'}
                                </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={item.avilable ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => {
                                        toggleSwitch(index)
                                    }}
                                    value={item.avilable}
                                    style={{
                                        marginHorizontal: 10
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                                    }}
                                >
                                    {'غير متاح'}
                                </Text>

                            </View> */}


                        </TouchableOpacity>

                    </Animatable.View>
                ) : null}





            </>
        )
    }

    function additem() {
        let data = [...players]
        let opj = {
            name: itemname,
            id: price,
            des: describtion,
            avilable: isEnabled,
            show: true
        }
        data.push(opj)
        setplayers(data)
        setOriginalPlayers(data)
        setaddmodal(false)
        setitemname('')
        setprice('')
        setdescribtion('')
        setIsEnabled(false)
    }
    return (
        <View style={[styles.container ]}>
<View
style={{
    opacity:choiceadd? .2 : null, 
 }}
>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: headerHeight }}
                onScroll={onScroll}>
                <FlatList
                    data={OriginalPlayers}
                    numColumns={1}
                    renderItem={({ item, index }) => renderinvoice(item, index)} />
            </ScrollView>


            <View style={[styles.header]}>
                <Animated.View
                    style={[styles.searchContainer, { transform: [{ translateY }] }]}>
                    <Animated.View
                        style={[
                            styles.inputContainer,
                            { opacity, transform: [{ translateY: inputTranslateY }] },
                        ]}>
                        <TextInput
                            value={name}

                            style={[styles.input  , {color:"#000"}]}
                            placeholder="إبحث.."
                            placeholderTextColor="#9F9FA0"

                            onChangeText={(text) => {
                                MakeSearchRequst(text)
                                setname(text)
                            }}
                            
                        // onFocus={() => (focused = true)}
                        // onBlur={() => (focused = false)}
                        />
                    </Animated.View>
                </Animated.View>
                <Animated.View style={[styles.firstContainer]}>
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


                            {/* <TouchableOpacity
                                style={{
                                    // width: 30,
                                    height: 30,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // paddingRight: 10,
                                    backgroundColor: "#83E5A5",
                                    borderRadius: 10

                                }}
                                onPress={() => {
                                    // navigation.goBack()
                                    // setaddmodal(true)
                                    setchoiceadd(true)
                                }}
                            >
                                
                                <Text
                                    style={{
                                        fontFamily: 'Janna LT Bold',color: "#9F9FA0",
                                    padding:2
                                    }}
                                >
                                    {'إضافة'}
                                </Text>
                            </TouchableOpacity> */}
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


                                }}>المنتجات </Text>
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
                                <Icons
                                    name={"arrow-left"}
                                    size={22}
                                    color='#fff'

                                />
                            </TouchableOpacity>

                        </View>


                    </View>
                </Animated.View>
            </View>

</View>

            <Modal
                visible={addmodal}
                onRequestClose={() => {
                    setaddmodal(false)
                }}
                animationType={'slide'}
            >
                <View style={{
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    flex: 1,
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: 'Janna LT Bold',
                        color: '#000',
                        marginVertical: 20,
                        marginLeft: 10,
                    }}>
                        إضافة منتج
                    </Text>

                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 2,
                        marginLeft: 10,
                    }}>اسم المنتج</Text>

                    <TextInput
                        value={itemname}
                        onChangeText={value => {
                            setitemname(value);

                        }}
                        placeholder={'مثال : كونجستال'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 5,
                        marginLeft: 10,
                    }}>
                        السعر
                    </Text>
                    <TextInput
                        value={price}
                        onChangeText={value => {
                            setprice(value);

                        }}
                        placeholder={'مثال : 50'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Janna LT Bold',

                        color: 'gray',
                        marginTop: 5,
                        marginLeft: 10,
                    }}>
                        وصف
                    </Text>
                    <TextInput
                        value={describtion}
                        onChangeText={value => {
                            setdescribtion(value);

                        }}
                        placeholder={'مثال : لاشي لاشي'}
                        type="phone-pad"
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            // height: 7,
                            borderRadius: 5,
                            backgroundColor: '#f0eff4',
                            padding: 10,
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Janna LT Bold',
                            color: "#000"
                        }}
                    />
                    <View
                        style={{

                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            marginTop: 10
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Janna LT Bold'
                            }}
                        >
                            {'متاح'}
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchadd}
                            value={isEnabled}
                        />
                        <Text
                            style={{
                                fontFamily: 'Janna LT Bold'
                            }}
                        >
                            {'غير متاح'}
                        </Text>

                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // navigation.navigate('MainPage')
                            additem()

                        }}
                        style={{
                            width: "90%", borderRadius: 10, justifyContent: "center"
                            , alignSelf: "center", marginTop: 30,
                            marginBottom: 10,
                            shadowColor: "#000",

                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#009bb1",
                            padding: 5,



                        }}
                    >
                        <Text style={{
                            fontSize: 22, textAlign: "center", color: "#000",
                            fontFamily: FONTS.fontFamily
                        }}>
                            إضافة
                        </Text>

                    </TouchableOpacity>

                </View>


            </Modal>



            <Modal
                visible={choiceadd}
                onRequestClose={() => {
                    setchoiceadd(false)
                }}
                animationType={'slide'}
                transparent={true}>
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
                                {'إختر نوع الإضافة'}
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
                                flexDirection: "row",
                                justifyContent: "space-around"
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setaddmodal(true)
                                    setchoiceadd(false)

                                }}
                                animation="fadeIn"
                                delay={50}
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
                                    color: "#9F9FA0",
                                    fontSize: 18, fontFamily: FONTS.fontFamily,
                                    textAlign: "center"
                                }}>
                                    {'اضافة يدوي'}
                                </Text>



                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                            navigation.navigate('Uploaditems')
                            setchoiceadd(false)

                            }}
                                animation="fadeIn"
                                delay={50}
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
                                    color: "#9F9FA0",
                                    fontSize: 18, fontFamily: FONTS.fontFamily
                                }}>
                                    {'رفع ملف اكسيل'}
                                </Text>



                            </TouchableOpacity>
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
                                    setchoiceadd(false)

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


        </View>
    );
}
export default Items;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 100,
        marginTop: 5,
        marginHorizontal: 5,
        backgroundColor: '#345678',
    },
    header: {
        height: headerHeight / 2,
        width: '100%',
        position: 'absolute',
    },
    firstContainer: {
        // height: headerHeight / 2,
        backgroundColor: '#fff',
        elevation: 2,
        // paddingHorizontal: 15,
        marginBottom: 30,
        justifyContent: 'center',
    },
    searchContainer: {
        height: headerHeight / 2,
        backgroundColor: '#fff',
        width: '100%',
        position: 'absolute',
        elevation: 2,
        padding: 10,
        paddingHorizontal: 15,
        overflow: 'hidden',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        padding: 0,
        paddingHorizontal: 15,
        fontSize: 15,
    },
});