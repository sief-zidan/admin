import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CustomDrawer} from './navigation';
import Login from  "./screens/Login"
import MainPage from  "./screens/MainPage"

import GaragDetils from './screens/GaragDetils';
import MainLayout from './screens/MainLayout';
import AddStore from './screens/AddStore';
import StoreDetils from './screens/StoreDetils';

import Statistics from './screens/Statistics';

import Orders from './screens/Orders';
import Items from './screens/Items';


import Pharmacy from './screens/Pharmacy';
 
import PharmacyOrder from './screens/PharmacyOrder';
import Storestaps from './screens/Storestaps';


import Finishpanar from  "./screens/Finishpanar"
import {

  // AddressAndPackage,
} from './screens';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName="Home"
        >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Home" component={MainLayout} />
        <Stack.Screen name="StoreDetils" component={StoreDetils} />
        <Stack.Screen name="Statistics" component={Statistics} />


        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GaragDetils" component={GaragDetils} />
        <Stack.Screen name="Finishpanar" component={Finishpanar} />
        <Stack.Screen name="AddStore" component={AddStore} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Items" component={Items} />


        <Stack.Screen name="PharmacyOrder" component={PharmacyOrder} />

        <Stack.Screen name="Pharmacy" component={Pharmacy} />

        <Stack.Screen name="Storestaps" component={Storestaps} />




        {/* <Stack.Screen name="AddressAndPackage" component={AddressAndPackage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;











// import * as React from 'react';


// import { Text, View, TouchableOpacity } from 'react-native';


// import Statistics from "./graduat/Statistics"
// // import Otp from "./graduat/Otp"
// import Thrwat from "./graduat/thrwat"


 


// export default class App extends React.Component {

//   render() {
//     return (
//       <>
//         <Thrwat />
//       </>
//     )
//   }
// }