import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../components/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export const HomeScreen = () => {
    return (
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.container}
      >
        <Header />
        <Text style={styles.headerMessage}>Match Your Style</Text>
        <View style={styles.searchContainer}>
          <View style={styles.iconContainer}>
            <AntDesignIcon name={'search1'} size={25} color={'#C0C0C0'} />
          </View>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor={'#C0C0C0'} cursorColor={'ED96E6'}/>
        </View>
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  headerMessage: {
    fontSize: 28,
    fontWeight:'400',
    color: '#000000',
    marginVertical: 24,
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000000',
  },
});
