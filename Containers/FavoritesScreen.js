import React, { Component } from 'react';
import { Text, View} from 'react-native';
import NavBar from '../Components/NavBar';



export default class FavoritesScreen extends React.Component{

  

  constructor(props){
    super(props);
   

 
  }


  
  render(){
    return(
      <View>
        <NavBar leftButton={true} title="Favorites" rightButton={true}/>
      </View>

    );
  }
}
