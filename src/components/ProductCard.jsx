import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export const ProductCard = ({isLiked, setIsLiked}) => {
    return (
      <View style={styles.productContainer}>
        <Image source={require('../assets/images/girl.png')} style={styles.coverImage} />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productTitle}>Jacket Jeans</Text>
          <Text style={styles.productPrice}>$45.56</Text>
        </View>
        <TouchableOpacity style={styles.likeContainer} onPress={() => setIsLiked(!isLiked)}>
          {isLiked
            ? (<AntDesignIcon name={'heart'} size={20} color={'#E55B5B'}/>)
            : (<AntDesignIcon name={'hearto'} size={20} color={'#E55B5B'}/>)
          }

        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
  },
  productDetailsContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingStart: 10,
  },
  productTitle: {
    fontSize: 16,
    color: '#444444',
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#9C9C9C',
    fontWeight: '600',
  },
  likeContainer: {
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 20,
  },
});
