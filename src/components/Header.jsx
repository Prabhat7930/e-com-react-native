import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.appIconContainer}>
            <Image source={require('../assets/icons/app.png')} style={styles.app} />
        </View>
        <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
      </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appIconContainer: {
        backgroundColor: '#FFFFFF',
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    app: {
        height: 24,
        width: 24,
    },
    avatar:{
        height: 44,
        width: 44,
        borderRadius: 22,
    },
});
