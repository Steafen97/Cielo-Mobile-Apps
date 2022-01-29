import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MaterialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/Headermaterial.png')} style={styles.logoheader} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titletext1}>Brocat</Text>
        <Text style={styles.titletext2}>Indonesian</Text>
      </View>
      <Text style={styles.detailtitle}>Description</Text>
      <View style={styles.detailcontainer}>
        <Text style={styles.detail}>Brokat adalah kelas kain tenunan ulang-alik yang sangat dekoratif, 
        sering dibuat dengan sutra berwarna dan terkadang dengan benang emas dan perak.</Text>
      </View>
      <Text style={styles.subhead}>Design with This Materials</Text>
      <View style={styles.materiallist}>
        <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Design')}>
          <Image source={require('../assets/Products/Design/Brocat.png')} style={styles.material} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Design')}>
          <Image source={require('../assets/Products/Design/Satin.png')} style={styles.material} />
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
    header: {
      marginTop: 40
    },
    title: {
      marginLeft: 22,
      marginTop: 10,
    },
    titletext1: {
      fontSize: 25,
      fontWeight: "bold",
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
});
