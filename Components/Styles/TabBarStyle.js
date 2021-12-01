import { StyleSheet } from "react-native";
import{Metrics, Colors, Fonts} from "../../Theme";



export default StyleSheet.create({

    container:{
        display: 'flex',
        position: 'absolute',
        justifyContent: "center",
        flexDirection: "row",
        bottom: Metrics.marginBottom,
        elevation: Metrics.elevation, 
        backgroundColor: Colors.whiteFull,
        borderRadius: Metrics.borderRadius,
        height: Metrics.tabBarHeight
    },
   
    shadow:{
        shadowColor: Colors.sombra,
        shadowOffset:{
            width: 0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    },

    tabIcon:{
        color: Colors.darkGrey,
        alignItems: "center",
        fontSize: Metrics.iconSmall
    },
    tabText:{
        fontSize: Metrics.fontSize,
        paddingTop: Metrics.smallSpace
        
        
    },
    tabView:{
        alignItems: "center",
        justifyContent: "center",
        
    }
   });