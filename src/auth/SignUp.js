import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker as RNPicker } from '@react-native-picker/picker';

const SignUp = ({ navigation }) => {
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [colorDepartment, setColorDepartment] = useState('#999999');
    const [colorSemester, setColorSemester] = useState('#999999');
    const [font, setFont] = useState(14.5)

    const [fontsLoaded] = useFonts({
        Roboto: require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    const handleSignUp = () => {
        console.warn('signup');
    };

    const handleLogIn = () => {
        navigation.navigate('LogIn');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleDepartmentChange = (itemValue) => {
        setDepartment(itemValue);
        setColorDepartment(itemValue ? '#FFFFFF' : '#999999');
        setFont(14.5)
    };

    const handleSemesterChange = (itemValue) => {
        setSemester(itemValue);
        setColorSemester(itemValue ? '#FFFFFF' : '#999999');
        setFont(14.5);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={handleLogIn}
            >
                <Ionicons name="arrow-back" size={27} color="#999999" />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={22} color="#999999" style={styles.icon} />
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your full name"
                            value={newUsername}
                            onChangeText={setNewUsername}
                            color="white"
                            placeholderTextColor="#999999"
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={22} color="#999999" style={styles.icon} />
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
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
                            placeholder="Password"
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
                            placeholder="Confirm password"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            color="white"
                            placeholderTextColor="#999999"
                        />
                    </View>
                    <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.eye}>
                        <Ionicons
                            name={showConfirmPassword ? 'eye-off' : 'eye'}
                            size={22}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons
                        name="school"
                        size={22}
                        color="#999999"
                        style={styles.icon}
                    />
                    <View style={styles.pickerContainer}>
                        <RNPicker
                            selectedValue={department}
                            style={[styles.picker, { color: colorDepartment }]}
                            onValueChange={handleDepartmentChange}
                        >
                            <RNPicker.Item label="Select Department" value="" style={{ fontSize: font }} />
                            <RNPicker.Item label="Computer" value="Computer" style={{ fontSize: font }} />
                            <RNPicker.Item label="Civil" value="Civil" style={{ fontSize: font }} />
                            <RNPicker.Item label="IT" value="IT" style={{ fontSize: font }} />
                            <RNPicker.Item label="Electronics" value="Electronics" style={{ fontSize: font }} />
                            <RNPicker.Item label="Software" value="Software" style={{ fontSize: font }} />
                            <RNPicker.Item label="BCA" value="BCA" style={{ fontSize: font }} />
                        </RNPicker>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons
                        name="calendar"
                        size={22}
                        color="#999999"
                        style={styles.icon}
                    />
                    <View style={styles.pickerContainer}>
                        <RNPicker
                            selectedValue={semester}
                            style={[styles.picker, { color: colorSemester }]}
                            onValueChange={handleSemesterChange}
                        >
                            <RNPicker.Item label="Select Semester" value="" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 1" value="semester1" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 2" value="semester2" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 3" value="semester3" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 4" value="semester4" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 5" value="semester5" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 6" value="semester6" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 7" value="semester7" style={{ fontSize: font }} />
                            <RNPicker.Item label="Semester 8" value="semester8" style={{ fontSize: font }} />
                        </RNPicker>
                    </View>
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signUp}>
                    <Text style={styles.accountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={handleLogIn}>
                        <Text style={styles.signUpText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#090C13',
        color: '#000000',
        zIndex: 1,
    },
    header: {
        marginLeft: 13,
        marginTop: -20
    },
    title: {
        fontSize: 24,
        marginBottom: 32,
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        marginLeft: 150,
        marginTop: 20,
        marginBottom: -2
    },
    formContainer: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 60
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
        fontSize: 14.5
    },
    textInputContainer: {
        flex: 1,
    },
    textInput: {
        height: 40,
        paddingHorizontal: 8,
        color: 'white',
        fontSize: 14.5
    },
    signUpButton: {
        backgroundColor: '#B508F1',
        borderRadius: 9,
        padding: 12,
        alignItems: 'center',
        marginBottom: 43,
        width: 370,
        height: 47.5,
        marginTop: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUp: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -8
    },
    signUpText: {
        color: '#B508F1',
        fontSize: 14.5
    },
    accountText: {
        color: 'white',
        fontSize: 14.5
    },
    eye: {
        padding: 10,
    },
    icon: {
        padding: 13,
    },
    pickerContainer: {
        flex: 1,
        marginLeft: -8,
    },
    picker: {
        color: 'white',
    },
});

export default SignUp;
