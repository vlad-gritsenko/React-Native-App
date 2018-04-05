import React from 'react';
import {Text, View} from 'react-native';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            alert: 0
        };
    }



    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             data: data.title
        //         })
        //     })
        this.setState({
            alert: this.state.alert + 1
        })
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/*<Text>{this.state.data}</Text>*/}
                <Text>Selected or nah? Hmm.... {this.state.alert}</Text>
            </View>
        );
    }
}


export default HomeScreen;