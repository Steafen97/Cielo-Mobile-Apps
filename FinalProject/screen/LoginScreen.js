import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;

            Alert.alert("Login Success");
            navigation.navigate("DrawerStackScreen")
            console.log(user);

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            Alert.alert("Login Failed", errorMessage);
        }
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo/logotext.png')} style={styles.logoregister} />
            <View style={styles.formcontainer}>
                <View style={styles.titleform}>
                    <View style={styles.fronticon}>
                        <Feather name="mail" size={24} color="black" />
                    </View>
                    <View style={styles.inputform}>
                        <TextInput 
                            style={styles.textinpusts}
                            placeholder='Email'
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.formcontainer}>
                <View style={styles.titleform}>
                    <View style={styles.fronticon}>
                        <AntDesign name="lock1" size={24} color="black" />
                    </View>
                    <View style={styles.inputform}>
                        <TextInput
                            style={styles.textinpusts}
                            placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />
                    </View>
                    <TouchableOpacity style={styles.eyeicon}>
                        <Ionicons name="eye-outline" size={19} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.forgotpassword}>
                <Text style={styles.forgotpasstext}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonlogin} onPress={submit}>
                <Text style={styles.buttonloginteks}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.regisdirector}>
                <Text style={styles.registeks1}>Don't have an account?</Text>
                <TouchableOpacity style={styles.regis} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registeks}>SIGN UP</Text>
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
    logoregister: {
        marginTop: 150,
        alignSelf: "center",
    },
    formcontainer: {
        marginTop: 35,
        paddingLeft: 45,
    },
    titleform: {
        width: 264,
        height: 32,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    inputform: {
        flex: 1,
        paddingLeft: 12,
    },
    eyeicon: {
        justifyContent: "center",
    },
    forgotpassword: {
        alignSelf: "flex-end",
        paddingRight: 50,
        paddingTop: 10,
    },
    buttonlogin: {
        width: 138,
        height: 42,
        backgroundColor: "#B0C4DE",
        borderRadius: 5,
        marginTop: 82,
        alignSelf: "center",
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
    regisdirector: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 160,
        backgroundColor: '#90B3F2',
        height: 37,
        alignItems: "center",
    },
    registeks1: {
        color: "white",
    },
    registeks: {
        color: "#3D5186",
        paddingLeft: 2,
    }

});