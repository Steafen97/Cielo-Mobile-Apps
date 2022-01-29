import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function BookmarkScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Bookmark</Text>
            </View>

            <View style={styles.textmenu}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Design Types</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Materials</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>Put Your BookMark Design and Materials Here</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    titlecontainer: {
        backgroundColor: "white",
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        marginBottom: 5,
        alignSelf: "center",
    },
    textmenu: {
        paddingTop: 15,
        marginLeft: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
        backgroundColor: "white",
    },
    text: {
        alignSelf: "center",
        marginTop: 240,
    }
});