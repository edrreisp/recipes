import React, { Component } from 'react';
import { Text, StyleSheet,SafeAreaView, View, FlatList} from 'react-native';
import styles from "../Containers/Styles/ExploreScreenStyle";
import NavBar from '../Components/NavBar';
import ExploreRow from '../Components/ExploreRow';


const recipeDate =[
  {
    id: "1111",
    name: "Grilled fish",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recomended: true,
    favorite: true,
    ingredients: "2 eggs\r\n 4 tomatoes\r\n salt\r\n pepper",
    Description: "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use yor favorite ingredients, making sure the garlic does not burn\r\n Then add onion, bell peppers, thyme, scotch bonne",
    photo: "https://cdn.pixabay.com/photo/2019/04/20/18/59/fish-4142467_960_720.jpg"
  
  },
  
  {
    id: "2222",
    name: "Cooking beef",
    categoryId: "1",
    categoryName: "Beef",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recomended: true,
    favorite: true,
    ingredients: "2 eggs\r\n 4 tomatoes\r\n salt\r\n pepper",
    Description: "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use yor favorite ingredients, making sure the garlic does not burn\r\n Then add onion, bell peppers, thyme, scotch bonne",
    photo: "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"
  
  },
  
  {
    id: "3333",
    name: "Duck breast",
    categoryId: "1",
    categoryname: "Duck",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recomended: true,
    favorite: true,
    ingredients: "2 eggs\r\n 4 tomatoes\r\n salt\r\n pepper",
    Description: "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use yor favorite ingredients, making sure the garlic does not burn\r\n Then add onion, bell peppers, thyme, scotch bonne",
    photo: "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"
  
  }

  
];


export default class ExploreScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      favorite: false
    };
   
 
  }



  pressFavorite = () =>{
    const {favorite} = this.state;
    this.setState({
      favorite: !favorite
    });
  }

  

  keyExtractor = (item, index ) => item.id;

  renderRow = ({item}) => {
    return <ExploreRow data={item}/>;
  }
  

  renderList = () =>{
    return(
      
       <FlatList
       keyExtractor={this.keyExtractor}
       data= {recipeDate}
       renderItem={this.renderRow}
       />
      

    );
  };
  
    
  render(){
    const {favorite} = this.state;
    return(
     
      <View> 
       <NavBar 
       leftButton={true} 
       title="Explore"
        rightButton={true}
         onPressFavorite={this.pressFavorite}
         favorite={favorite}/>
         
       <View style={styles.container}>{this.renderList()}</View>
       
       </View>
     
     
      

    );
  }
}

