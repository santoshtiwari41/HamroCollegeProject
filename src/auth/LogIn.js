import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginImage from '../../vectorimage/LoginImage';

const LogIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        if (username && password) {
            // Successful login
            setLoggedIn(true);
        } else {
            // Invalid credentials
            setError('Invalid username or password');
        }
    };

    const handleSignUp = () => {
        // Redirect to sign-up page
        // setLoggedIn(false);
        navigation.navigate('SignUp');
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        navigation.navigate('Forgot');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <View style={styles.container}>
            <>
                <LoginImage />
                <Text style={styles.title}>Welcome to Hamro College!</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail" size={22} color="#999999" style={styles.icon} />
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your email"
                                value={username}
                                onChangeText={setUsername}
                                color="white"
                                placeholderTextColor="#999999"
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons
                            name="key"
                            size={22}
                            color="#888"
                            style={styles.icon}
                        />
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                color="white"
                                placeholderTextColor="#999999"
                            />
                        </View>
                        <TouchableOpacity onPress={toggleShowPassword} style={styles.eye}>
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={22}
                                color="#888"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.rememberMeContainer}>
                            <TouchableOpacity onPress={toggleRememberMe}>
                                <Ionicons
                                    name={rememberMe ? 'checkbox' : 'checkbox-outline'}
                                    size={22}
                                    color={rememberMe ? '#B508F1' : 'white'}
                                />
                            </TouchableOpacity>
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                        </View>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.signUp}>
                        <Text style={styles.accountText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#090C13',
        color: '#000000',
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        
        marginBottom: 32,
        color: '#FFFFFF',
        marginTop:15
    },
    formContainer: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        width: 370,
        height: 47.5,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#212121',
    },
    textInputContainer: {
        flex: 1,
    },
    textInput: {
        height: 40,
        paddingHorizontal: 8,
        color: 'white',
        fontSize: 14.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370,
        marginBottom: 16,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        color: 'white',
        marginLeft: 8,
        fontSize: 14.5,
    },
    forgotPasswordButtonText: {
        color: '#B508F1',
        textDecorationLine: 'underline',
        fontSize: 14.5,
    },
    loginButton: {
        backgroundColor: '#B508F1',
        borderRadius: 9,
        padding: 12,
        alignItems: 'center',
        marginBottom: 50,
        width: 370,
        height: 47.5,
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpButton: {
        backgroundColor: '#27ae60',
        borderRadius: 9,
        padding: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUp: {
        flex: 1,
    },
    eye: {
        padding: 12,
    },
    icon: {
        padding: 13,
    },
    signUp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signUpText: {
        color: '#B508F1',
        fontSize: 14.5,
    },
    accountText: {
        color: 'white',
        fontSize: 14.5,
    },
});

export default LogIn;
