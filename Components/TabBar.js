import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../Components/Styles/TabBarStyle"
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import FavoritesScreen from "../Containers/FavoritesScreen";
import CustomIcon from "../Components/CustomIcon";



const Tab = createBottomTabNavigator();


const Tabs = () =>{

    return(
         
    <Tab.Navigator 
    screenOptions={{
        tabBarStyle: [{ 
           ...styles.container,
           ...styles.shadow }],
        tabBarShowLabel: false,
        tabBarLabelStyle: false,
        headerShown: false, }}>

        
        <Tab.Screen name="Explore" component={ExploreScreen}
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={styles.tabView}>
                 <CustomIcon name="home" style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14} }/> 
                
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14, ...styles.tabText }}> Explore</Text>
                 
                </View>

            ),
        }}/>
        <Tab.Screen name="Category" component={CategoriesScreen}
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={styles.tabView}>
                 <CustomIcon name="recipes" style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14} }/> 
                 
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14, ...styles.tabText }}>Categories </Text>

                </View>

            ),
        }}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen}
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={styles.tabView}>
                 <CustomIcon name="favorites" style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14} }/> 
                
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 14, ...styles.tabText }}> Favorites </Text>
                  
                </View>

            ),
        }}/>

    </Tab.Navigator>
   
  

);

}

export default Tabs;



