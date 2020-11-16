import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => (
          <ResultsDetail
            name={item.name}
            image={item.image_url}
            rating={item.rating}
            reviews={item.review_count}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
