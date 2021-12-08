import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetail from '../Containers/RecipeDetail';
import ExploreScreen from '../Containers/ExploreScreen';

const Stack = createStackNavigator();



const ExploreNavigator = () => {
    <Stack.Navigator initialRouteName={'Explore'}>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Detail" component={RecipeDetail} />
    </Stack.Navigator>
    );
export default ExploreNavigator;