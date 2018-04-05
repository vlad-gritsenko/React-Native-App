import React from 'react';
import {Text, View} from 'react-native';

class DevicesScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Unassigned Devices!</Text>
            </View>
        );
    }
}



export default DevicesScreen;