import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({navigation}) {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ]);

    const submit = async () => {
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password,
            )
            const user = userCredential.user;
            Alert.alert("Registration Success");
            navigation.navigate("DrawerStackScreen")
            console.log(user);

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            Alert.alert("Registration Failed", errorMessage)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo/logotext.png')} style={styles.logoregister} />
            <View style={styles.formcontainer}>
                <View style={styles.titleform}>
                    <Text style={styles.texttitle}>* Username</Text>
                    <View style={styles.inputform}>
                        <TextInput 
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                        />
                    </View>
                </View>
                <View style={styles.titleform}>
                    <Text style={styles.texttitle}>* Password</Text>
                    <View style={styles.inputform}>
                        <View style={styles.textinputs}>
                            <TextInput 
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="eye-outline" size={19} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.titleform}>
                    <Text style={styles.texttitle}>* Name</Text>
                    <TextInput style={styles.inputform} />
                </View>
                <View style={styles.titleform}>
                    <Text style={styles.texttitle}>* Gender</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.inputform}
                    />
                </View>
                <View style={styles.titleform}>
                    <Text style={styles.texttitle}>* Mobile Phone</Text>
                    <TextInput 
                        style={styles.inputform} 
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <View style={styles.registerButton}>
                <TouchableOpacity style={styles.buttonregister} onPress={submit}>
                    <Text style={styles.buttonregisterteks}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.logindirector}>
                <Text style={styles.loginteks1}>Already a Cielo member?</Text>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginteks}>LOG IN</Text>
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
        alignSelf: "center",
        marginTop: 84,
        width: 160,
        height: 99,
    },
    formcontainer: {
        paddingLeft: 30,
        paddingTop: 5,
    },
    titleform: {
        paddingBottom: 19,
    },
    texttitle: {
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 12,
    },
    inputform: {
        width: 300,
        height: 39,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#454545',
        backgroundColor: '#F8F8FF',
        paddingLeft: 10,
        flexDirection: 'row',
    },
    textinputs: {
        flex: 1,
    },
    icon: {
        justifyContent: "center",
        marginRight: 10,
    },
    registerButton: {
        width: 300,
        height: 39,
        marginTop: 25,
        borderRadius: 3,
        backgroundColor: '#B0C4DE',
        alignSelf: 'center',
    },
    buttonregisterteks: {
        fontSize: 24,
        color: "white",
        paddingVertical: 2.5,
        alignSelf: "center",
    },
    logindirector: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 55,
        backgroundColor: '#90B3F2',
        height: 37,
        alignItems: "center",
    },
    loginteks1: {
        color: "white",
    },
    loginteks: {
        color: "#3D5186",
        paddingLeft: 2,
    }




}); 