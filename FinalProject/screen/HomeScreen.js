import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, SafeAreaView } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function HomeScreen({navigation}) {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUserName(user.email)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });  
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View style={styles.profilepic}>
                    <Ionicons name="person-circle" size={80} color={'#C4C4C4'} />
                </View>
                <View style={styles.titletext}>
                    <Text style={styles.hellotext}>Hello,{userName}</Text>
                    <Text style={styles.captiontext}>What clothing design do you want?</Text>
                </View>
            </View>

            <View style={styles.searchcontainer}>
                <View style={styles.searchicon}>
                    <FontAwesome name="search" size={20} color={'#696969'} />
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.searchinput}
                        placeholder='Search..'
                    />
                </View>
            </View>

            <ScrollView>

            <Text style={styles.recomtext}>Recommended Design</Text>

            <View style={styles.recomlist}>
                <TouchableOpacity style={styles.itemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Vintage.png')} style={styles.item} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Jeans.png')} style={styles.item} />
                </TouchableOpacity>
            </View>

            <Text style={styles.populartext}>Popular Design</Text>

            <View style={styles.popularcontainer}>
                <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Chinese.png')} style={styles.popitem} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Blazer.png')} style={styles.popitem} />
                </TouchableOpacity>
            </View>

            <View style={styles.popularcontainer}>
                <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Aesthetic.png')} style={styles.popitem} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Design')}>
                    <Image source={require('../assets/Products/Design/Brocat.png')} style={styles.popitem} />
                </TouchableOpacity>
            </View>           
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    heading: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 24,
    },
    hellotext: {
        fontSize: 20,
        fontWeight: '700',
    },
    captiontext: {
        fontSize: 12,
        marginTop: 5,
    },
    searchcontainer: {
        flexDirection: "row",
        width: 311,
        height: 40,
        backgroundColor: "#C4C4C4",
        borderRadius: 15,
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 25,
    },
    searchicon: {
        marginLeft: 10,
    },
    searchinput: {
        marginLeft: 6,
    },
    recomlist: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginLeft: 10,

    },
    itemcontainer: {
        marginLeft: 2,
    },
    recomtext: {
        marginLeft: 24,
        fontSize: 18,
        fontWeight: "400",
    },
    populartext: {
        marginTop: 28,
        marginLeft: 24,
        fontSize: 18,
        marginBottom: 10,
    },
    popularcontainer:{
        flexDirection: "row",
        marginLeft: 24,
        marginBottom: 22,
    },
    popitemcontainer: {
        marginRight: 22,
    },

});