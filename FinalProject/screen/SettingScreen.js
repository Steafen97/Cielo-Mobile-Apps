import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { getAuth, signOut } from 'firebase/auth';

export default function SettingScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo/logo.png')} style={styles.logowelcome} />
            <View style={styles.SetCon}>
                <Text style={styles.settingtext}>Settings</Text>
            </View>

            <View style={styles.list}>

                <View style={styles.accountcontainer}>
                    <View style={styles.accountlayout}>
                        <View style={styles.fronticon}>
                            <Ionicons name="person-circle" size={70} color={'#C4C4C4'} />
                        </View>
                        <View style={styles.textcontainer}>
                            <Text style={styles.texts}>Account  </Text>
                        </View>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Account')}>
                            <AntDesign name="rightcircleo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.accountcontainer}>
                    <View style={styles.accountlayout}>
                        <View style={styles.fronticon}>
                            <Ionicons name="information-circle" size={70} color={'#C4C4C4'} />
                        </View>
                        <View style={styles.textcontainer}>
                            <Text style={styles.texts}>About Us</Text>
                        </View>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('About')}>
                            <AntDesign name="rightcircleo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={styles.signoutButton}>
                <TouchableOpacity style={styles.buttonsignout} onPress={() => {
                    const auth = getAuth();
                    signOut(auth);
                    navigation.navigate('Login');
                    }}>
                    <Text style={styles.buttonsignoutteks}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    logowelcome: {
        width: 160,
        height: 182,
        marginTop: 90,
        alignSelf: "center",
    },
    SetCon : {
        marginTop: 10,
        marginLeft: 35,
    },
    settingtext: {
        fontSize: 24,
        fontWeight: "400",
    },
    list: {
        marginTop: 25,
        marginLeft: 35,
    },
    accountcontainer: {
        marginBottom: 39,
    },
    accountlayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textcontainer: {
        marginLeft: 15,
    },
    texts: {
        fontSize: 20,
        fontWeight: "400",
    },
    icon: {
        marginLeft: 81,
    },
    signoutButton: {
        marginTop: 25,
        alignItems: "center",
    },
    buttonsignout: {
        height: 47,
        width: 276,
        borderRadius: 3,
        backgroundColor: "#FA8072",
    },
    buttonsignoutteks: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        paddingTop: 5,
    },
    
});