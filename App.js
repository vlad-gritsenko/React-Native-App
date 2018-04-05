import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View, Text} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import KitchenScreen from "./KitchenScreen";
import DevicesScreen from "./DevicesScreen";

console.disableYellowBox = true;

class App extends React.Component {
    constructor() {
        super()

        counter = 0;
    }

    render() {
        return (
                <View>
                    <HomeScreen/>
                    <KitchenScreen/>
                    <DevicesScreen/>
                    <Text>App</Text>
                </View>
            )
    }
}

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen }
});

const KitchenStack = StackNavigator({
    Kitchen: { screen: KitchenScreen }
});

const DevicesStack = StackNavigator({
    Devices: { screen: DevicesScreen }
});

export default TabNavigator(
    {
        'Home': { screen: HomeStack },
        'Kitchen': { screen: KitchenStack },
        'Unassigned Devices': {screen: DevicesStack}
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                } else if (routeName === 'Kitchen') {
                    iconName = 'ios-cube';
                }
                else if (routeName === 'Unassigned Devices') {
                    iconName = 'ios-phone-portrait';
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            tabBarOnPress: ({scene, jumpToIndex}) => {
                // console.log('onPress:', scene.route);
                if (scene.route.key === 'Kitchen') {
                    console.log('ha');
                    counter++;
                }
                jumpToIndex(scene.index);
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: false,
    }
);