import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  if (results.length == 0) return null;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerStyle}
            onPress={() =>
              navigation.navigate("ResultsShow", {
                id: item.id,
              })
            }
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
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

export default withNavigation(ResultList);
