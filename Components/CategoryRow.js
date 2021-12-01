import React from "react";
import {View, Text} from "react-native";
import styles from "./Styles/CategoriesRowStyle";


export default class CategoryRow extends React.Component{

    render(){
        const {data} = this.props;

        return(
            <View style={styles.categoryRow}>
                <Text style={styles.categoryText}>{data.name}</Text>

            </View>

        );
    }
}
