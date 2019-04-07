import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Post extends Component{
    render (){
        return ( 
            <View style={styles.conteiner}>
                <View style={styles.header}> 
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text styles={styles.name}>
                        {this.props.name}
                    </Text> 

                </View>

                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,

    },

    header: {
        margin: 10,

    },
    title:{
        fontSize: 20,
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
        marginRight: 80,
    },
    name: {
        fontSize: 14,
        color: 'gray',
        margin: 10,
        marginRight: 40,
    },
    text: {
        fontSize: 16,
        margin: 10,
        
    }


})