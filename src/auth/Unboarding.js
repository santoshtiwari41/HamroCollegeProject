import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UnboardingImage from '../../vectorimage/UnboardingImage';
import Unboardingimage2 from '../../vectorimage/Unboardingimage2';

const Unboarding = ({ navigation }) => {
    
    const handleUnboarding = () => {
        navigation.navigate('LogIn');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Hamro College!</Text>
              
            <View style={styles.container2}>
                <UnboardingImage /> 
                {/* <Unboardingimage2 /> */}
                <TouchableOpacity style={styles.loginButton} onPress={handleUnboarding}>
                    <Text style={styles.buttonText}>Let's start</Text>
                    <Ionicons name="md-chevron-forward" size={24} color="#FFFFFF" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#090C13',
    },
    container2: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 70,
    },
    title: {
        fontSize: 24,
        marginBottom: 32,
        color: '#FFFFFF',
        marginTop: 40,
    },
    loginButton: {
        backgroundColor: '#B508F1',
        borderRadius: 9,
        padding: 12,
        alignItems: 'center',
        flexDirection: 'row', // Align children horizontally
        width: 370,
        height: 47.5,
        justifyContent:'space-between',
       
    },
    buttonText:{
     fontSize:16,
     color: '#FFF',
     fontWeight:'bold'
    },
    icon: {
        marginLeft: 8, // Add some space between the text and the icon
    },
});

export default Unboarding;
