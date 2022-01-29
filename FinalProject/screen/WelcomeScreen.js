import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo/logo.png')} style={styles.logowelcome} />
            
            <View style={styles.tekswelcomecontainer}>
                <Text style={styles.tekswelcome}>Welcome to Cielo!</Text>
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonlogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonloginteks}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonregister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonregisterteks}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuvia}>
                <Image source={require('../assets/Button/Welcome_Or.png')} style={styles.orvia} />
            </View>

            <View style={styles.buttonGoogle}>
                <TouchableOpacity style={styles.buttonregGoogle} onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../assets/Button/Welcome_Google.png')} style={styles.logoGoogle} />
                </TouchableOpacity>
            </View>

            <View style={styles.caution}>
                <Text style={styles.cautiontext}>By logging and registering, you agree to our Terms of Service and Privacy Policy.</Text>
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
    tekswelcomecontainer:{
        marginTop: 29,
        marginLeft: 30,
    },
    tekswelcome:{
        fontSize: 14,
        fontWeight: "400",
        fontStyle: 'normal'    
    },
    button: {
        marginTop: 27,
        flexDirection: "row",
    },
    buttonlogin: {
        width: 138,
        height: 42,
        backgroundColor: "#B0C4DE",
        borderRadius: 5,
        marginLeft: 30,
    },
    buttonloginteks: {
        fontSize: 24,
        fontWeight: "400",
        fontStyle: 'normal',
        color: "white",
        textAlign: "center",
        paddingBottom: 3,
        paddingTop: 3,
    },
    buttonregister: {
        width: 138,
        height: 42,
        backgroundColor: "#B0C4DE",
        borderRadius: 5,
        marginLeft: 25,
    },
    buttonregisterteks: {
        fontSize: 24,
        fontWeight: "400",
        fontStyle: 'normal',
        color: "white",
        textAlign: "center",
        paddingBottom: 3,
        paddingTop: 3,
    },
    menuvia: {
        marginTop: 13,
        marginLeft: 30,
    },
    orvia: {
        height: 14,
        width: 301,
    },
    buttonGoogle: {
        marginTop: 13,
        marginLeft: 30,
    },
    buttonregGoogle: {
        height: 42,
        width: 301,
    },
    caution:{
        marginTop: 17,
        marginLeft: 35,
        marginRight: 29,
    },
    cautiontext: {
        color: "#808080",
        textAlign: "left",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
    }
});