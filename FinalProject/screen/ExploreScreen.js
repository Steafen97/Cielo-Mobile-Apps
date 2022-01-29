import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function ExploreScreen({navigation}) {
    return (
        <View style={styles.container}>
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

            <View style={styles.textmenu}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Design Types</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Materials</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.itemcontainer}>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Katun.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Linen.png')} style={styles.popitem} />
                    </TouchableOpacity>
                </View>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Denim.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Brocade.png')} style={styles.popitem} />
                    </TouchableOpacity>
                </View>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Sifon.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Rajut.png')} style={styles.popitem} />
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
    searchcontainer: {
        marginTop: 60,
        flexDirection: "row",
        width: 311,
        height: 40,
        backgroundColor: "#C4C4C4",
        borderRadius: 15,
        alignSelf: "center",
        alignItems: "center",
    },
    searchicon: {
        marginLeft: 10,
    },
    searchinput: {
        marginLeft: 6,
    },
    textmenu: {
        marginTop: 15,
        marginLeft: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    popularcontainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 22,
    },
    popitemcontainer: {
        marginRight: 5,
    },
    
});