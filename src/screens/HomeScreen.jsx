import React,   { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../components/Header';
import { Category } from '../components/Category';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { ProductCard } from '../components/ProductCard';

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];
export const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
    return (
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.container}
      >
        <Header />
        {/* <Category /> */}
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.headerMessage}>Match Your Style</Text>
              <View style={styles.searchContainer}>
              <View style={styles.iconContainer}>
                <AntDesignIcon name={'search1'} size={25} color={'#C0C0C0'} />
              </View>
              <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor={'#C0C0C0'} cursorColor={'ED96E6'}/>
              </View>
              <FlatList
                data={categories}
                renderItem={({item})=><Category item={item} selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}/>}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}/>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={[1,2,3,4,5,6]}
          renderItem={({item}) => <ProductCard item={item} isLiked={isLiked} setIsLiked={setIsLiked}/>}
          keyExtractor={(item) => item}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 60.0,
          }}/>
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  headerMessage: {
    fontSize: 28,
    fontWeight:'400',
    color: '#000000',
    marginVertical: 12,
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
    paddingHorizontal:10.0,
  },
});
