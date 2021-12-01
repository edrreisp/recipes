import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import NavBar from '../Components/NavBar';
import CategoryRow from "../Components/CategoryRow";
import styles from "../Containers/Styles/CaregoriesScreenStyle"

const categoriesData = [
  {
    id: "1",
    name: "Fish"

  },
  {
    id: "2",
    name: "Meat"
  },
  {
    id: "3",
    name: "BreakFast"
  },

  {
    id: "4",
    name: "Fruit"
  },

  {
    id: "5",
    name: "Salad"
  },
  {
    id: "6",
    name: "Pasta"
  },
  {
    id: "7",
    name: "Soup"
  },
  
  

  


];


export default class CategoriesScreen extends React.Component{ 

  constructor(props){
    super(props);
   
  }
  keyExtractor = (item, index) => item.id;

  renderRow = ({item}) => {
    return <CategoryRow data={item}/>;
  }
  renderList = () =>{
    return(
      <FlatList
      keyExtractor={this.keyExtractor}
      data={categoriesData}
      renderItem={this.renderRow}/>

    );
  }

   
  render(){
    return(
      <View style={styles.mainScreen}>
        <NavBar leftButton={true} title="Categories" rightButton={false}/>
        <View>{this.renderList()}</View>
      </View>

    );
  }
}

