import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome')
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo/logo.png')} style={styles.log} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    log: {
        width: 160,
        height: 182
    }
})

