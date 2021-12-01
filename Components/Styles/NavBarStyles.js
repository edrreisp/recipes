import { StyleSheet } from "react-native";
import{Metrics, Colors, Fonts} from "../../Theme";



export default StyleSheet.create({
    navBar: {
     marginTop: Metrics.statusBarHeight,
     height: Metrics.navBarHeight, 
     backgroundColor: Colors.whiteFull,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center"
   
    },
    title:{
     ...Fonts.style.recipesNameCard,
     color:"#000000"
     
    },
   
    leftContainer: {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"

    },

    rightContainer:{
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"

    },
   
    titleWrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    favorite: {
        color: Colors.lightOrange
    },

    
    
   });