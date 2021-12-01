import React from "react";
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import styles from "./Styles/NavBarStyles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


class NavBar extends React.Component{

    pressFavorite =() => {
        const {onPressFavorite} = this.props;
        if(typeof onPressFavorite === "function"){
            onPressFavorite();
        }


    };

    leftButton = () => {
        const {leftButton} = this.props;
        if(leftButton){
            return (
            <TouchableOpacity onPress={() =>alert("back")}>
             <MaterialIcons name="keyboard-arrow-left"  size={21}  color="#000000"/>
            
            </TouchableOpacity>
            );
        }
    };

    rightButton = () => {
        const {rightButton, favorite } = this.props;
        if(rightButton){
            if(favorite ){
                return(
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <MaterialIcons name="favorite" size={21}  color="#000000" style={[ styles.favorite]}/>
                    </TouchableWithoutFeedback>
                    );
            }else{
              return (
                <TouchableWithoutFeedback onPress={this.pressFavorite}>
                  <MaterialIcons name="favorite" size={21}  color="#000000"/>
                </TouchableWithoutFeedback>

             );

            }
        }
    };
    render(){

        const {title} = this.props;

        return(
            <View style={styles.navBar}>
                <View style={styles.leftContainer}>{this.leftButton()}
                </View>
                
                <View style={styles.titleWrapper}> 
                <Text style={styles.title}>{title}</Text>
                 </View>
                 <View style={styles.rightContainer}>{this.rightButton()} 
                 </View> 
            
          </View>

        );
    }
}
export default NavBar;