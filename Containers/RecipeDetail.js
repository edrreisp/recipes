import React from "react";
import {View, Button} from "react-native"


function RecipeDetail({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => this.props.navigation.navigate('ExploreScreen') } title="Go back home" />
      </View>
      
    );
  }

  export default RecipeDetail