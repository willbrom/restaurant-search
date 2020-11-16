import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ name, image, rating, reviews }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: image }} />
      <Text style={styles.titleStyle}>{name}</Text>
      <Text style={styles.ratingStyle}>
        {rating} Stars, {reviews} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 250,
    marginBottom: 5,
    borderRadius: 4,
  },
  titleStyle: {
    fontWeight: "bold",
  },
  ratingStyle: {
    color: "#979797",
    fontWeight: "600",
  },
});

export default ResultsDetail;
