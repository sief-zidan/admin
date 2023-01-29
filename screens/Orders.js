import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, BackHandler, ActivityIndicator, AsyncStorage, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Feather from "react-native-vector-icons/Feather";
import Icons from "react-native-vector-icons/FontAwesome5";
import { TabView, SceneMap } from 'react-native-tab-view';
import NewOrders from './NewOrders';
import OrderHistory from './OrderHistory';
import PendingOrder from './PendingOrder';
import InprocessOrder from './InprocessOrder';


const initialLayout = { width: Dimensions.get('window').width };

const Orders = ({ navigation, route }) => {


    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {


        setTimeout(() => {
            setloading(false)
        }, 1000);
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () =>

            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);


    }, [handleBackPress]);
    const handleBackPress = React.useCallback(() => {
        // do some action and return true or if you do not
        // want the user to go back, return false instead
        navigation.goBack()
        //  return true
    }, []);



    const FirstRoute = () => (
        <NewOrders navigation={navigation} />

    );

    const SecondRoute = () => (
        <InprocessOrder navigation={navigation} />

    );

    const thirdRoute = () => (
        <PendingOrder navigation={navigation} />

    );
    const fourRoute = () => (
        <OrderHistory navigation={navigation} />

    );
    const [index, setIndex] = React.useState(3);
    const [routes] = React.useState([
        { key: '4', title: 'معدلة' },
        { key: '3', title: 'قيد الانتظار' },
        { key: '1', title: 'قيد التنفيذ' },
        { key: '2', title: 'طلبات جديدة' },

    ]);

    const renderScene = SceneMap({
        2: FirstRoute,
        1: SecondRoute,
        3: thirdRoute,
        4: fourRoute
    });


    function renderHeader() {
        return (
            <View
                style={{
                    alignItems: "center",
                    backgroundColor: '#009bb1',
                    width: "100%",
                    flexDirection: "row",
                    padding: 5,
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                    }}
                    onPress={() => {

                    }
                    }
                >
                    <Icons
                        name={"history"}
                        size={30}
                        color={COLORS.white}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,

                        // paddingLeft: 20,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h2,
                            color: "#fff",
                            textAlign: "center"
                        }}
                    >
                        {("مسار الطلبات")}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 15,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name={"arrow-left"}
                        size={30}
                        color={'#fff'}
                    />
                </TouchableOpacity>
            </View>
        );
    }




    return (
        <>

            <View style={{

                flex: 1,
            }}>
                {renderHeader()}
                {loading ? (
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


                ) : (
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        style={{ backgroundColor: 'white' }}


                    />
                )}
            </View>


        </>

    );
};
export default Orders;

