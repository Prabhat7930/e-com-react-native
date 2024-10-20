import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../components/Header';

export const HomeScreen = () => {
    return (
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.container}
      >
        <Header />
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
});
