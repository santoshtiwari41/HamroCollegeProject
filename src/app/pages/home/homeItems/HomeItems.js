
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const HomeItems = () => {
    const handleHomeworkIconPress = () => {
       
        const googleClassroomURL = 'https://classroom.google.com';
        Linking.openURL(googleClassroomURL).catch((error) =>
          console.error('Error while opening Google Classroom:', error)
        );
      };
      const handlePaymentIconPress = () => {
       
        const googleClassroomURL = 'https://esewa.com.np';
        Linking.openURL(googleClassroomURL).catch((error) =>
          console.error('Error while opening  Esewa:', error)
        );
      };
    const { navigate } = useNavigation();
    const onPress = () => {
        console.warn('pressed');

    };
    let iconcolor = 'rgba(150,140,200,0.6)'
    // let iconcolor = 'rgba(100,200,250,0.6)'
    // let iconcolor='rgba(181,100,241,0.6)'
    let iconsize = 40

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Items</Text> */}
            <View style={styles.flexbox}>
                <TouchableOpacity style={styles.tc} onPress={handleHomeworkIconPress}
                // {() => { navigate('Homework') }}
                     >
                    <View style={[styles.circle, styles.homework]}>
                        <Ionicons name="md-school" size={iconsize} color={iconcolor} style={styles.icon} />
                    </View>
                    <Text style={[styles.topic1, styles.topic]}>Homework</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Attendence')
                }} >
                    <View style={[styles.circle, styles.attendence]}>
                        <Ionicons name="md-checkmark-circle" size={iconsize} color={iconcolor} style={styles.icon} />
                    </View>
                    <Text style={[styles.topic2, styles.topic]}>Attendance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Routine')
                }}>
                    <View style={[styles.circle, styles.routine]}>
                        <Ionicons name="md-time" size={iconsize} color={iconcolor} style={styles.icon} />

                    </View>
                    <Text style={[styles.topic3, styles.topic]}>Routine</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tc, styles.li]} onPress={() => {
                    navigate('Library')
                }}>
                    <View style={[styles.circle, styles.library]}>
                        <Ionicons name="md-library" size={iconsize} color={iconcolor} style={styles.icon} />

                    </View>
                    <Text style={[styles.topic4, , styles.topic]}>Library</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.tc}  onPress={() => {
                    navigate('Result')
                }}>
                    <View style={[styles.circle, styles.result]}>
                        <Ionicons name="ios-medal-outline" size={iconsize} color={iconcolor} style={styles.icon} />
                    </View>
                    <Text style={[styles.topic1, styles.topic]}>Result</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Syllabus')
                }}>
                    <View style={[styles.circle, styles.syllabus]}>
                        <Ionicons name="ios-document-text-outline" size={iconsize} color={iconcolor} style={styles.icon} />
                    </View>
                    <Text style={[styles.topic2, styles.topic]}>Syllabus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Notice')
                }}>
                    <View style={[styles.circle, styles.notice]}>
                        <Ionicons name="ios-paper-plane-outline" size={iconsize} color={iconcolor} style={styles.icon} />

                    </View>
                    <Text style={[styles.topic3, styles.topic]}>Notice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tc, styles.li]} onPress={handlePaymentIconPress}
                // {() => {navigate('Payments') }}
                >
                    <View style={[styles.circle, styles.library]}>
                        <Ionicons name="ios-card-outline" size={iconsize} color={iconcolor} style={styles.icon} />

                    </View>
                    <Text style={[styles.topic4, , styles.topic]}>Payment</Text>
                </TouchableOpacity>
                



                

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Statements')
                }}>
                    <View style={[styles.circle, styles.statements]}>
                        <Ionicons name="ios-document-outline" size={iconsize} color={iconcolor} style={styles.icon} />
                    </View>
                    <Text style={[styles.topic2, styles.topic]}>Statements</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tc} onPress={() => {
                    navigate('Due')
                }}>
                    <View style={[styles.circle, styles.due]}>
                        <Ionicons name="ios-alert-circle-outline" size={iconsize} color={iconcolor} style={styles.icon} />

                    </View>
                    <Text style={[styles.topic3, styles.topic]}>Due</Text>
                </TouchableOpacity>






            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#212121',
        borderRadius: 15,
        paddingBottom: 13,
        marginBottom: 145,
        backgroundColor: '#090C13',
        marginTop:-25

    },
    flexbox: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        alignItems: 'center',

        paddingLeft: 15


    },
    title: {
        marginLeft: 17,
        color: 'rgb(200,200,200 )',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: 15


    },
    tc: {
        
        margin: 6,
        width: 80,
        marginBottom: 13



    }, topic3: {
        marginLeft: 14
    },
    topic4: {
        marginLeft: 3
    }, li: {
        width: 70
    }, topic: {
        marginTop: 13
    },
    
    icon: {
        padding: 14,
    },

    topic: {
        // color:'#D7CACA'
        color: 'rgb(128,128,135 )'
    }
   
});

export default HomeItems;

