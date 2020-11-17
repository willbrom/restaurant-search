import React, { useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import useDetails from "../hooks/useDetails";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [photos, name] = useDetails(id);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{name}</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={photos}
        renderItem={({ item }) => (
          <>
            <Image style={styles.photoStyle} source={{ uri: item }} />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  photoStyle: {
    height: 150,
    width: 300,
    marginTop: 5,
  },
});

export default ResultsShowScreen;
