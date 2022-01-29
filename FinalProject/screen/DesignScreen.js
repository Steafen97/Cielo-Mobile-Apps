import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function DesignScreen({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/Headerdesign.png')} style={styles.logoheader} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titletext1}>Dress Brocat Bridal Party</Text>
                <Text style={styles.titletext2}>Indonesian</Text>
            </View>
            <Text style={styles.subhead}>Main Materials</Text>
            <View style={styles.materiallist}>
                <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Material')}>
                    <Image source={require('../assets/Products/Materials/Brocade.png')} style={styles.material} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Material')}>
                    <Image source={require('../assets/Products/Materials/Katun.png')} style={styles.material} />
                </TouchableOpacity>
            </View>
            <Text style={styles.detailtitle}>Detail</Text>
            <View style={styles.detailcontainer}>
                <Text style={styles.detail}>Model baju brokat merupakan salah satu yang memang sangat dicari 
                oleh banyak orang. Penggunaan baju brokat kekinian dapat membuat seseorang menjadi semakin 
                tampil menawan dan indah dipandang.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    header: {
        marginTop: 40
    },
    title: {
        marginLeft: 22,
        marginTop : 10,
    },
    titletext1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    subhead: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 18,
        color: "#6495ED",
    },
    materiallist: {
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 20,
    },
    detailtitle: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 18,
        color: "#6495ED",
    },    
    detailcontainer: {
        padding: 22,  
    },
    detail: {
        fontSize: 16,
        fontWeight: "400",
    }

    

    
});