import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    id: 1,
    img: require('../../../../assets/hmr.jpg'),
  },
  {
    id: 2,
    img: require('../../../../assets/airpod.jpeg'),
  },
  {
    id: 3,
    img: require('../../../../assets/airpodmax.jpeg'),
  },
  {
    id: 4,
    img: require('../../../../assets/charger.png'),
  },
  {
    id: 5,
    img: require('../../../../assets/lock.jpeg'),
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.img} style={styles.slideImage} />
      </View>
    );
  };

  const handlePagination = (index) => {
    setActiveIndex(index);
    flatListRef.current.scrollToOffset({
      offset: index * Dimensions.get('window').width,
      animated: true,
    });
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
              onPress={() => handlePagination(index)}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={(event) => {
          const currentIndex = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          );
          setActiveIndex(currentIndex);
        }}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    paddingBottom:25
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  paginationContainer: {
    alignItems: 'center',
    marginTop: -50,
   
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#B508F1',
  },
});

export default Slider;
