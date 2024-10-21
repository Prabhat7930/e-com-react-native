import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Category = ({item, selectedCategory, setSelectedCategory}) => {
    return (
      <TouchableOpacity onPress={() => setSelectedCategory(item)}>
        <Text style={[styles.categoryText, selectedCategory === item && {
          color: '#FFFFFF',
          backgroundColor: '#E96E6E',
        }]}
        >{item}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16.0,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        borderRadius: 12.0,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 8,
        marginVertical: 12,
    },
    selectedCategoryText: {
        fontSize: 16.0,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#E96E6E',
        borderRadius: 12.0,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 8,
        marginVertical: 12,
    },
});
