import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from "./Styles/ExploreRowStyles";
import CustomIcon from "../Components/CustomIcon";







export default class ExploreRow extends React.Component {

    onPress = () =>{
        const {navigation} = this.props;
        navigation.navigate("Detail");
    }
    

      renderImage = () => {
          const {data} = this.props;

          let imageUrl = "https://reactnative.dev/img/tiny_logo.png";
          if (data && data.photo){
              imageUrl = data.photo;
          }
          return <Image source = {{uri: imageUrl}} style={styles.recipeImage} />
      };

      

    render(){
          const {data} = this.props;

        return(
            
            <View style={styles.container}>
            <TouchableOpacity  >
              <View style={styles.imageContainer}>{this.renderImage()}</View>
              </TouchableOpacity>
              
              <View style={styles.infoContainer}>
                  <Text style = {styles.category}>{data.categoryName}</Text>
                  <Text style = {styles.title}>{data.name}</Text>
              
              
              <View style= {styles.properties}>
              <View style={styles.cell}>
              <CustomIcon name="duration" style={styles.cellIcon}/>
              <Text style={styles.cellText}>{data.duration} Minutos</Text>
              </View>
  
              <View style={styles.cell}>
              <CustomIcon name="difficulty" style={styles.cellIcon}/>
              <Text style={styles.cellText}>{data.complexity} </Text>
              </View>
  
  
              <View style={styles.cell}>
              <CustomIcon name="recipes" style={styles.cellIcon}/>
              <Text style={styles.cellText}>{data.people} Personas</Text>
              </View>
              </View>
              </View>
              </View>
                 
              
        );
    }


}



