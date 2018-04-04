import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Data from './test';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data.title
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Fake data</Text>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
